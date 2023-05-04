# Welcome to your CDK TypeScript project
This workshop is derived from the AWS CDK workshop, located at https://cdkworkshop.com.

Prerequisites for the workshop: [Set Up AWS For Local Development](https://docs.google.com/document/d/1fOsFLnBVsJKVMthliba1-UJGVf6vch3wr_4QelCVRMg/edit?usp=sharing)

Note: We generally use cdk init to initialize a git repo with basic CDK structure, dependencies, and config files, but since we are going to clone, we will run “npm i” instead to get all required dependencies



You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
