import * as s3 from '@aws-cdk/aws-s3';
import { CfnOutput, Construct, Stack, StackProps } from '@aws-cdk/core';

export class NinnyhammerWebLayer extends Stack {
 
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const ninnyhammerBucket = new s3.Bucket(this, 'NinnyhammerBucket', {
      bucketName: 'NinnyhammerBucket',
    });



    // An API Gateway to make the Lambda web-accessible
    // const gw = new apigw.LambdaRestApi(this, 'Gateway', {
    //   description: 'Endpoint for a simple Lambda-powered web service',
    //   handler,
    // });

    // this.urlOutput = new CfnOutput(this, 'Url', {
    //   value: gw.url,
    // });
  }
}
