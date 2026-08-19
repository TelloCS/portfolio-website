resource "aws_dynamodb_table" "contact_submissions" {
  name         = var.contact_table_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "messageId"

  attribute {
    name = "messageId"
    type = "S"
  }

  tags = {
    Name = "Contact Table Name"
  }
}