import { expect as expectCDK, matchTemplate, MatchStyle, SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as NinnyhammerCdk from '../lib/infra-stack';
import { WebLayerStack } from '../lib/infra-stack'; 
import '@aws-cdk/assert/jest';

// test('Empty Stack', () => {
//     const app = new cdk.App();
//     // WHEN
//     const stack = new NinnyhammerCdk.NinnyhammerPipelineStack(app, 'MyTestStack');
//     // THEN
//     expectCDK(stack).to(matchTemplate({
//       "Resources": {}
//     }, MatchStyle.EXACT))
// });

test('bucket with the name ninnyhammer-web-bucket', () => {
  const app = new cdk.App();
  const stack = new WebLayerStack(app, 'MyTestStack');
  expect(stack).toHaveResource('AWS::S3::Bucket', {
    BucketName: 'ninnyhammer-web-bucket',
  });
});
//   expect(() => {
//     new 
//     bucketName: 'ninnyhammer-web-bucket',
//   });
// });

//import '@aws-cdk/assert/jest';

// ...
// test('dlq creates an alarm', () => {
//   const stack = new Stack();

//   new dlq.DeadLetterQueue(stack, 'DLQ');

//   expect(stack).toHaveResource('AWS::CloudWatch::Alarm', {
//     MetricName: "ApproximateNumberOfMessagesVisible",
//     Namespace: "AWS/SQS",
//     Dimensions: [
//       {
//         Name: "QueueName",
//         Value: { "Fn::GetAtt": [ "DLQ581697C4", "QueueName" ] }
//       }
//     ],
//   });
// });