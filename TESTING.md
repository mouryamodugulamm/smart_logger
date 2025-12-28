# Testing Guide

## Quick Test

Run the basic test script:

```bash
npm test
# or
node test.js
```

This will show:
- ✅ Info logs (blue)
- ✅ Warn logs (yellow)
- ✅ Error logs (red, bright)
- ❌ Debug logs (hidden unless DEBUG=true)

## Test Scenarios

### 1. Normal Development Mode

```bash
npm test
```

**Expected output:**
- Info, warn, and error logs are visible
- Debug logs are hidden

### 2. Debug Mode Enabled

**Windows (PowerShell):**
```powershell
$env:DEBUG='true'; npm test
```

**Linux/Mac:**
```bash
DEBUG=true npm test
```

**Expected output:**
- All logs including debug are visible

### 3. Production Mode

**Windows (PowerShell):**
```powershell
$env:NODE_ENV='production'; npm test
```

**Linux/Mac:**
```bash
NODE_ENV=production npm test
```

**Expected output:**
- Only error logs are visible
- Info, warn, and debug logs are hidden

### 4. Production + Debug Mode

**Windows (PowerShell):**
```powershell
$env:NODE_ENV='production'; $env:DEBUG='true'; npm test
```

**Linux/Mac:**
```bash
NODE_ENV=production DEBUG=true npm test
```

**Expected output:**
- Only error logs are visible (production mode overrides DEBUG)

## Manual Testing in Your Code

Create a test file:

```typescript
// my-test.ts
import { log } from '@my-scope/smart-logger';

log.info('Testing info');
log.warn('Testing warn');
log.error('Testing error');
log.debug('Testing debug');
```

Compile and run:
```bash
tsc my-test.ts --module es2020 --moduleResolution node
node my-test.js
```

## Verify Output Format

Each log should have:
- `[HH:MM:SS]` timestamp
- `[LEVEL]` prefix
- Colored output (visible in terminal)
- Proper console method (error uses console.error, etc.)

## Expected Colors

- **Info**: Blue (`\x1b[34m`)
- **Warn**: Yellow (`\x1b[33m`)
- **Error**: Red + Bright (`\x1b[1m\x1b[31m`)
- **Debug**: Gray (`\x1b[90m`)


