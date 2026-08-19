import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { randomUUID } from "crypto";

const config = {
  region: process.env.AWS_REGION || 'us-east-1',
};

if (process.env.DYNAMODB_ENDPOINT) {
  config.endpoint = process.env.DYNAMODB_ENDPOINT;
  config.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy',
  };
};

const client = new DynamoDBClient(config);
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertEmptyValues: false,
  },
  unmarshallOptions: {
    wrapNumbers: false,
  },
});

const sesClient = new SESClient({
  endpoint: process.env.SES_ENDPOINT || undefined,
  region: process.env.AWS_REGION || "us-east-1",
});

export const handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
  };

  try {
    const body = JSON.parse(event.body);
    const { name, email, message, phone_number } = body;

    if (phone_number) {
      console.log("Spam bot detected and blocked.");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: "Success!" })
      };
    }

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields." }),
      };
    }

    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Input exceeds maximum character length." }),
      };
    }

    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Invalid email address format." }),
      };
    }

    const tableName = process.env.TABLE_NAME;
    const notificationEmail = process.env.GMAIL;
    const messageId = randomUUID();
    const createdAt = new Date().toISOString();

    await docClient.send(new PutCommand({
      TableName: tableName,
      Item: { messageId: messageId, name, email, message, submittedAt: createdAt }
    }));

    if (notificationEmail && !process.env.DYNAMODB_ENDPOINT) {
      await sesClient.send(new SendEmailCommand({
        Source: notificationEmail,
        Destination: { ToAddresses: [notificationEmail] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: `Portfolio Contact: ${name}` },
          Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}` } }
        }
      }));
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Message sent successfully!" })
    };
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "An error occurred while processing your request." }),
    };
  }
};