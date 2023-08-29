I built this web app on AWS to showcase my CV within its own serverless web application architecture.

This site has been built using the following AWS services:

IAM
S3
CloudFront
AWS Certificate Manager
Route 53
AWS Lambda
API Gateway
DynamoDB
AWS SAM
and obviously... GitHub

I have implemented a visitor counter which is persisted in a DynamoDB table and configured via a REST API endpoint to update the table using AWS API Gateway and AWS Lambda.

I implemented the AWS Lambda function using Python code - I'm not a programmer so I had some help with this!

DNS has been configured via Route 53.

I use a Serverless Application Model template to update the application and maintain the codebase (Python and JavaScript) in a GitHub repository.

To complete, I implemented a CI/CD pipeline using GitHub Actions.

