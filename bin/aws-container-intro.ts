#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsContainerIntroStack } from '../lib/aws-container-intro-stack';

const app = new cdk.App();

new AwsContainerIntroStack(app, 'AwsContainerIntroStack', {
  description: 'Network Resources',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
