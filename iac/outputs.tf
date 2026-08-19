output "cloudfront_domain_name" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.portfolio_cdn.domain_name
}

output "api_endpoint" {
  value       = "${aws_apigatewayv2_api.contact_api.api_endpoint}"
  description = "The URL to POST your React form data to"
}