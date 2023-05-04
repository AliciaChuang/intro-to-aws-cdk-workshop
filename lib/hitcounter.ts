import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';


/*
export interface HitCounterProps {
  // the function for which we want to count url hits
  //TO DO #4
}
*/


// export class HitCounter extends Construct {
//   // allows accessing the counter function 
//   //TO DO #9

//   // the hit counter table 
//   //TO DO #16

//   constructor(scope: Construct, id: string, props: HitCounterProps) {
//     super(scope, id);

//     /*
//     const table = new dynamodb.Table(this, "Hits", {
//       partitionKey: {
//         name: //TO DO #10,
//         type: dynamodb.AttributeType.STRING
//       }
//     });
//     //TO DO #16

//     this.handler = new lambda.Function(this, 'HitCounterHandler', {
//       runtime: lambda.Runtime.NODEJS_14_X,
//       //TO DO #10
//     });
//     */

//     // grant the lambda role read/write permissions to our table
//     //TO DO #13

//     // grant the lambda role invoke permissions to the downstream function
//     //TO DO #14
//   }
// }
