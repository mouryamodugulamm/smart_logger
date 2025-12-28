# Login and Publish Guide

## Step 1: Login to npm

Run this command in your terminal:

```bash
npm login
```

You'll be prompted for:
- **Username**: Your npm username
- **Password**: Your npm password
- **Email**: Your npm email (public)
- **OTP** (if 2FA enabled): One-time password from your authenticator app

## Step 2: Verify Login

```bash
npm whoami
```

Should show your npm username.

## Step 3: Publish

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages like `@my-scope/smart-logger`.

## Troubleshooting

### "Invalid username or password"
- Check your credentials
- Make sure your email is verified on npm
- Try `npm login` again

### "You must verify your email"
- Check your email inbox
- Click the verification link
- Try `npm login` again

### "Package name already exists"
- The name `@my-scope/smart-logger` might be taken
- Change the name in `package.json` to something unique
- Or use your own scope: `@your-username/smart-logger`

## After Publishing

Your package will be available at:
```
https://www.npmjs.com/package/@my-scope/smart-logger
```

Install it with:
```bash
npm install @my-scope/smart-logger
```


