# GitHub Actions Setup Guide

## Option 1: Auto-Publish on Release (Recommended)

This workflow publishes to npm when you create a GitHub Release.

### Setup Steps:

1. **Create NPM Token:**
   - Go to https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Click "Generate New Token" → "Automation"
   - Copy the token

2. **Add Secret to GitHub:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Paste your npm token
   - Click "Add secret"

3. **Create a Release:**
   - Go to your repository on GitHub
   - Click "Releases" → "Create a new release"
   - Tag version: `v1.0.0` (must start with `v`)
   - Release title: `v1.0.0`
   - Click "Publish release"
   - GitHub Actions will automatically publish to npm

### How it works:
- When you create a GitHub Release, it triggers the workflow
- The workflow builds, tests, and publishes to npm
- No manual `npm publish` needed!

---

## Option 2: Manual Trigger

You can also manually trigger the publish workflow:

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Publish to npm" workflow
4. Click "Run workflow"
5. Select branch and click "Run workflow"

---

## Option 3: Auto-Publish on Push (Not Recommended)

If you want to publish on every push (not recommended for production):

1. Edit `.github/workflows/publish.yml`
2. Change `on:` section to:
   ```yaml
   on:
     push:
       branches: [main]
   ```
3. ⚠️ **Warning**: This will publish on EVERY push, which can create many versions

---

## Current Setup

The workflow files are configured for **Option 1** (Release-based publishing), which is the best practice:

- ✅ Only publishes when you create a release
- ✅ Gives you control over when to publish
- ✅ Follows semantic versioning
- ✅ Prevents accidental publishes

---

## Workflow Files

- `.github/workflows/publish.yml` - Publishes to npm on release
- `.github/workflows/ci.yml` - Runs tests on push/PR

---

## Publishing Workflow

1. **Make changes** to your code
2. **Commit and push** to GitHub
3. **Update version** in `package.json` (or use `npm version`)
4. **Create GitHub Release** with tag `v1.0.0`
5. **GitHub Actions automatically publishes** to npm

No manual `npm publish` needed! 🚀

