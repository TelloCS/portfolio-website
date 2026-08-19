import express from 'express';
import cors from 'cors';
import { handler } from './index.mjs';

const app = express();
const PORT = process.env.PORT;
const VITE_API_URL = process.env.VITE_API_URL;

app.use(cors({ origin: VITE_API_URL }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const mockAwsEvent = {
      body: JSON.stringify(req.body),
      headers: req.headers,
    };

    const lambdaResponse = await handler(mockAwsEvent);

    res.status(lambdaResponse.statusCode)

    if (lambdaResponse.headers) {
      res.set(lambdaResponse.headers);
    }

    res.send(JSON.parse(lambdaResponse.body));
  } catch (error) {
    console.error("Local server error:", error);
    res.status(500).json({ error: "Local simulation failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Local Dev Server running on http://localhost:${PORT}`);
});