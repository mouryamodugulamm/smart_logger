# Publishing Guide

## Pre-Publishing Checklist

### 1. Update package.json

Before publishing, update these fields in `package.json`:

- **`name`**: Change `@my-scope/smart-logger` to your desired package name
  - For scoped packages: `@your-username/smart-logger` or `@your-org/smart-logger`
  - For unscoped packages: `smart-logger` (check availability first)
  
- **`author`**: Add your name/email
  ```json
  "author": "Your Name <your.email@example.com>"
  ```

- **`repository`**: Add your Git repository URL
  ```json
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/smart-logger.git"
  }
  ```

- **`version`**: Start with `1.0.0` (already set)

### 2. Verify Build

```bash
npm run build
```

Ensure `dist/` folder contains:
- `index.js`
- `index.d.ts`
- `logger.js`
- `logger.d.ts`
- `types.js`
- `types.d.ts`

### 3. Test the Package

```bash
npm test
```

## Publishing Steps

### Step 1: Login to npm

```bash
npm login
```

Enter your npm credentials:
- Username
- Password
- Email
- OTP (if 2FA enabled)

### Step 2: Verify You're Logged In

```bash
npm whoami
```

### Step 3: Check Package Name Availability

For unscoped packages:
```bash
npm view smart-logger
```

If it returns 404, the name is available.

For scoped packages (like `@your-username/smart-logger`):
- Scoped packages are always available under your username/org
- No need to check availability

### Step 4: Publish

#### For Scoped Packages (Recommended)

```bash
npm publish --access public
```

The `--access public` flag is required for scoped packages.

#### For Unscoped Packages

```bash
npm publish
```

### Step 5: Verify Publication

```bash
npm view @my-scope/smart-logger
# or
npm view smart-logger
```

## Updating the Package

### Version Bump

```bash
# Patch version (1.0.0 -> 1.0.1)
npm version patch

# Minor version (1.0.0 -> 1.1.0)
npm version minor

# Major version (1.0.0 -> 2.0.0)
npm version major
```

This will:
1. Update `package.json` version
2. Create a git tag
3. Commit the changes

Then publish:
```bash
npm publish --access public
```

## Package Name Options

### Option 1: Scoped Package (Recommended)
```json
{
  "name": "@your-username/smart-logger"
}
```

**Pros:**
- No name conflicts
- Professional appearance
- Free for public packages

**Publish:**
```bash
npm publish --access public
```

### Option 2: Unscoped Package
```json
{
  "name": "smart-logger"
}
```

**Pros:**
- Simpler import path
- Easier to remember

**Cons:**
- Name might be taken
- Need to check availability

**Publish:**
```bash
npm publish
```

## What Gets Published

The following files/folders are included:
- `dist/` - Compiled JavaScript and TypeScript definitions
- `README.md` - Package documentation
- `LICENSE` - MIT License
- `package.json` - Package metadata

The following are excluded (via `.npmignore`):
- `src/` - Source TypeScript files
- `test.js`, `test.ts` - Test files
- `examples/` - Example files
- `node_modules/` - Dependencies
- Development files

## Troubleshooting

### Error: "Package name already exists"
- Choose a different name
- Use a scoped package name
- Contact the owner if you need that specific name

### Error: "You must verify your email"
- Check your email and verify it
- Run `npm login` again after verification

### Error: "Invalid package name"
- Package name must be lowercase
- No spaces or special characters (except `-`, `_`, `.`)
- Scoped packages: `@scope/package-name`

### Error: "Missing README.md"
- Ensure README.md exists in the package root
- It's already included in the package

## Post-Publishing

### 1. Install and Test

```bash
npm install @my-scope/smart-logger
# or
npm install smart-logger
```

### 2. Create a Test Project

```bash
mkdir test-package
cd test-package
npm init -y
npm install @my-scope/smart-logger
```

Create `test.js`:
```javascript
import { log } from '@my-scope/smart-logger';

log.info('It works!');
```

Run:
```bash
node test.js
```

### 3. Update Documentation

- Update README with actual package name
- Add installation instructions
- Update any references to the package name

## Best Practices

1. **Always test before publishing**
   ```bash
   npm run build
   npm test
   ```

2. **Use semantic versioning**
   - Patch: Bug fixes
   - Minor: New features (backward compatible)
   - Major: Breaking changes

3. **Write clear commit messages**
   - Helps with changelog generation

4. **Tag releases in Git**
   ```bash
   git tag v1.0.0
   git push --tags
   ```

5. **Keep CHANGELOG.md** (optional but recommended)
   - Document changes between versions

## Quick Reference

```bash
# Login
npm login

# Build
npm run build

# Test
npm test

# Publish (scoped)
npm publish --access public

# Publish (unscoped)
npm publish

# Update version
npm version patch|minor|major

# View package
npm view @my-scope/smart-logger
```

Good luck with your publication! 🚀


