#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { NinnyhammerCdkStack } from '../lib/ninnyhammer-cdk-stack';

const app = new cdk.App();
new NinnyhammerCdkStack(app, 'NinnyhammerCdkStack');
