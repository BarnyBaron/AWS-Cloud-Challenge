This is my attempt at the cloud resume challenge.

I built this web app on AWS to showcase a serverless web application architecture.

This site has been built using the following AWS services:

IAM
S3
AWS CloudFront
Certificate Manager
Route 53
AWS Lambda
DynamoDB

I have implemented a visitor counter which is persisted in a DynamoDB table and configured a Functional URL via AWS Lambda.

I implemented the AWS Lambda function using Python - however I'm not a programmer so I had some help with this!

DNS has been configured via Route 53.

I maintain the codebase (Python and JavaScript) in a GitHub repository and implemented a CI/CD pipeline using GitHub Actions.

