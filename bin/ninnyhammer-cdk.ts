#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NinnyhammerCdkStack } from '../lib/ninnyhammer-cdk-stack';

const app = new cdk.App();

new NinnyhammerCdkStack(app, 'NinnyhammerCdkStack', {
	env: { account: '770823308201', region: 'eu-north-1' },
});

app.synth()
