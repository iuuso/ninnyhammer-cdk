import * as s3 from '@aws-cdk/aws-s3';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as acm from '@aws-cdk/aws-certificatemanager';
import * as s3_deployment from '@aws-cdk/aws-s3-deployment';

import { HostedZone } from '@aws-cdk/aws-route53';
import { CfnOutput, Construct, Stage, Stack, StageProps, StackProps, RemovalPolicy } from '@aws-cdk/core';
import { SecurityPolicyProtocol } from '@aws-cdk/aws-cloudfront';

const domain = 'juusokarlstrom.com';

export class WebLayerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const webbucket = new s3.Bucket(this, 'NinnyhammerBucket', {
      bucketName: 'ninnyhammer-web-bucket',
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      cors: [
        {
          allowedMethods: [ s3.HttpMethods.GET, s3.HttpMethods.HEAD ],
          allowedOrigins: [ '*' ],
        },
      ],
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new s3_deployment.BucketDeployment(this, 's3_deployment', {
      sources: [ s3_deployment.Source.asset('app/') ],
      destinationBucket: webbucket,
    })

    const hostedZone = new HostedZone(this, 'hostedZone', { zoneName: domain });
    const certificate = new acm.DnsValidatedCertificate(this, 'NinnyHammerCert', {
      domainName: domain,
      hostedZone,
    });

    // CloudFront Distribution for the S3 origin bucket.
    const cfDistribution = new cloudfront.Distribution(this, 'NinnyhammerCF', {
      defaultBehavior: {
        origin: new origins.S3Origin(webbucket)
      },
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2019,
      domainNames: [ domain ],
      certificate: certificate,
    });
};
}