import * as s3 from '@aws-cdk/aws-s3';
import { CfnOutput, Construct, Stage, Stack, StageProps, StackProps } from '@aws-cdk/core';

export class WebLayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const webbucket = new s3.Bucket(this, 'NinnyhammerBucket', {
      bucketName: 'ninnyhammer-web-bucket',
    });
};
}