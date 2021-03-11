import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import { CfnOutput, Construct, Stage, Stack, StageProps, StackProps } from '@aws-cdk/core';

export class WebLayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const webbucket = new s3.Bucket(this, 'NinnyhammerBucket', {
      bucketName: 'ninnyhammer-web-bucket',
    });

    new cloudfront.Distribution(this, 'NinnyhammerCF', {
      defaultBehavior: {
        origin: new origins.S3Origin(webbucket)
      },
    });
};
}