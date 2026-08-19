variable "bucket_name" {
  type        = string
  description = "Globally unique name for the S3 bucket."
}

variable "domain_name" {
  type        = string
  description = "Domain name"
}

variable "acm_certificate_arn" {
  type        = string
  description = "ACM certificate"
}

variable "contact_table_name" {
  type        = string
  description = "Contact table name"
}

variable "notification_email" {
  type        = string
  description = "Notification email"
}

variable "environment" {
  type        = string
  description = "The deployment environment (e.g., dev, production)"
  default     = "production"
}

variable "cloudfront_domain" {
  type        = string
  description = "CloudFront domain"
}