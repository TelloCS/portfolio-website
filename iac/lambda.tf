data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda_exec_role" {
  name               = "contact_form_lambda_role"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

data "aws_iam_policy_document" "lambda_permissions" {
  statement {
    actions = [
      "dynamodb:PutItem"
    ]
    resources = [aws_dynamodb_table.contact_submissions.arn]
  }
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents"
    ]
    resources = ["arn:aws:logs:*:*:*"]
  }

  statement {
    actions = [
      "ses:SendEmail",
      "ses:SendRawEmail"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "lambda_policy" {
  name   = "contact_form_lambda_policy"
  role   = aws_iam_role.lambda_exec_role.id
  policy = data.aws_iam_policy_document.lambda_permissions.json
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/../api/index.mjs"
  output_path = "${path.module}/lambda.zip"
}

resource "aws_lambda_function" "contact_handler" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = "ProcessContactForm"
  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "index.handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  package_type     = "Zip"

  runtime = "nodejs20.x"

  environment {
    variables = {
      TABLE_NAME = var.contact_table_name
      GMAIL      = var.notification_email
    }
  }

  tags = {
    Environment = "production"
    Application = "portfolio"
  }
}

resource "aws_cloudwatch_log_group" "contact_api_logs" {
  name              = "/aws/lambda/${aws_lambda_function.contact_handler.function_name}"
  retention_in_days = 14

  tags = {
    Environment = "production"
    Application = "portfolio"
  }
}