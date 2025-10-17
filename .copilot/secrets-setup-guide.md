# Repository Secrets Setup Guide

## Required Secrets for AI Code Review

### 1. OPENAI_API_KEY (For AI Code Review)

**Get Your API Key:**
1. Go to https://platform.openai.com/signup
2. Sign up with your email
3. Verify your account
4. Go to https://platform.openai.com/api-keys
5. Click "Create new secret key"
6. Name it "MominTrust-AI-Review"
7. Copy the key (starts with sk-...)

**Free Credits:**
- New accounts get $5 in free credits
- GPT-3.5-turbo costs ~$0.01 per review
- ~500 free code reviews!

### 2. SONAR_TOKEN (For SonarCloud)

**Get Your Token:**
1. Go to https://sonarcloud.io
2. Sign up with GitHub
3. Import your repository
4. Go to Administration → Security
5. Generate a token
6. Name it "MominTrust-GitHub-Actions"

### 3. Add Secrets to GitHub

**Steps:**
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret:

```
Name: OPENAI_API_KEY
Value: sk-your-openai-key-here

Name: SONAR_TOKEN  
Value: your-sonar-token-here
```

## Security Notes
- ✅ Secrets are encrypted and never exposed in logs
- ✅ Only accessible by GitHub Actions workflows
- ✅ Perfect for non-profit security requirements
- ✅ No sensitive data stored in code

## Cost Monitoring
- OpenAI: Check usage at platform.openai.com/usage
- SonarCloud: Free tier includes 1M lines of code
- GitHub Actions: 2,000 free minutes/month

## Troubleshooting
If workflows fail:
1. Check secret names match exactly
2. Verify tokens haven't expired
3. Ensure repository is public
4. Check GitHub Actions permissions