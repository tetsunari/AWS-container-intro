export interface BaseConfig {
  project: string
  owner: string
  constCenter: string
  env: {
    account?: string
    region: string
  }
  tags: Record<string, string>
}

export const baseConfig: BaseConfig = {
  project: 'sbcntr',
  owner: 'platform-team',
  constCenter: 'engineering',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'ap-northeast-1',
  },
  tags: {
    Project: 'Sbcntr',
    ManagedBy: 'CDK',
    Repository: 'sbcntr-cdk-infrastructure',
  },
}
