import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as NinnyhammerCdk from '../lib/ninnyhammer-cdk-stack';

// test('Empty Stack', () => {
//     const app = new cdk.App();
//     // WHEN
//     const stack = new NinnyhammerCdk.NinnyhammerPipelineStack(app, 'MyTestStack');
//     // THEN
//     expectCDK(stack).to(matchTemplate({
//       "Resources": {}
//     }, MatchStyle.EXACT))
// });
