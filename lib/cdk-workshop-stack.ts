import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
//import { HitCounter } from './hitcounter';
import { TableViewer } from 'cdk-dynamo-table-viewer';

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /*
    const hello = new lambda.Function(this, 'HelloHandler', {
      // TO DO #2 
      // execution environment
      // code loaded from "lambda" directory
      // file is "hello", function is "handler"

     });
     */
    
    //Add a hit counter to our stack
    //TO DO #11

    // defines an API Gateway REST API resource backed by our "hello" function.
    /*
    new apigw.LambdaRestApi(this, 'Endpoint', {
      //TO DO #3
      //TO DO #12 Update function
    });
    */

    //TO DO #15 Table Viewer
  }
}
