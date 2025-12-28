# Usage Guide

## Installation

```bash
npm install @my-scope/smart-logger
```

## Basic Usage

### JavaScript (ESM)

```javascript
import { log } from '@my-scope/smart-logger';

log.info('Application started');
log.warn('This is a warning');
log.error('An error occurred');
log.debug('Debug information');
```

### TypeScript

```typescript
import { log, type Logger, type LogLevel } from '@my-scope/smart-logger';

log.info('TypeScript example');
log.warn('Type-safe logging');

// Use types
const logger: Logger = log;
const level: LogLevel = 'info';
```

## Common Use Cases

### 1. Application Startup

```javascript
import { log } from '@my-scope/smart-logger';

log.info('Starting application...');
log.info('Database connected');
log.info('Server listening on port 3000');
```

### 2. API Request Logging

```javascript
import { log } from '@my-scope/smart-logger';

app.get('/api/users', (req, res) => {
  log.info(`GET /api/users - ${req.ip}`);
  // ... your code
  log.debug(`Query params: ${JSON.stringify(req.query)}`);
});
```

### 3. Error Handling

```javascript
import { log } from '@my-scope/smart-logger';

try {
  // your code
} catch (error) {
  log.error(`Operation failed: ${error.message}`);
  log.debug(`Stack trace: ${error.stack}`);
}
```

### 4. Conditional Debugging

```javascript
import { log } from '@my-scope/smart-logger';

function complexOperation(data) {
  log.debug(`Input data: ${JSON.stringify(data)}`);
  
  // ... processing
  
  log.debug(`Result: ${result}`);
  log.info('Operation completed');
}
```

## Environment Configuration

### Development Mode (Default)

All logs except `debug` are visible:

```bash
node app.js
```

Output:
```
[10:30:45] [INFO] Application started
[10:30:46] [WARN] This is a warning
[10:30:47] [ERROR] An error occurred
```

### Enable Debug Logs

```bash
DEBUG=true node app.js
```

Output:
```
[10:30:45] [INFO] Application started
[10:30:46] [WARN] This is a warning
[10:30:47] [ERROR] An error occurred
[10:30:48] [DEBUG] Debug information
```

### Production Mode

Only errors are logged:

```bash
NODE_ENV=production node app.js
```

Output:
```
[10:30:47] [ERROR] An error occurred
```

## Integration Examples

### Express.js

```javascript
import express from 'express';
import { log } from '@my-scope/smart-logger';

const app = express();

app.use((req, res, next) => {
  log.info(`${req.method} ${req.path}`);
  next();
});

app.get('/api/data', (req, res) => {
  log.debug(`Query: ${JSON.stringify(req.query)}`);
  res.json({ data: 'example' });
});
```

### Next.js API Route

```typescript
// app/api/users/route.ts
import { log } from '@my-scope/smart-logger';
import { NextResponse } from 'next/server';

export async function GET() {
  log.info('Fetching users');
  
  try {
    const users = await fetchUsers();
    log.debug(`Found ${users.length} users`);
    return NextResponse.json(users);
  } catch (error) {
    log.error(`Failed to fetch users: ${error}`);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

### Node.js Script

```javascript
import { log } from '@my-scope/smart-logger';

async function main() {
  log.info('Script started');
  
  for (let i = 0; i < 5; i++) {
    log.debug(`Iteration ${i}`);
    await processItem(i);
    log.info(`Processed item ${i}`);
  }
  
  log.info('Script completed');
}

main().catch(error => {
  log.error(`Script failed: ${error}`);
  process.exit(1);
});
```

## Output Format

Each log message follows this format:

```
[HH:MM:SS] [LEVEL] Message
```

Example:
```
[14:32:15] [INFO] User logged in
[14:32:16] [WARN] Rate limit approaching
[14:32:17] [ERROR] Database connection failed
[14:32:18] [DEBUG] Request payload: {...}
```

## Colors

- **Info**: Blue
- **Warn**: Yellow  
- **Error**: Red (bright)
- **Debug**: Gray

Colors are automatically applied in terminals that support ANSI codes.

## Best Practices

1. **Use appropriate log levels**:
   - `info`: General information about application flow
   - `warn`: Warnings that don't stop execution
   - `error`: Errors that need attention
   - `debug`: Detailed debugging information

2. **Keep messages concise** but informative

3. **Use debug for detailed information** that's only needed during development

4. **Always log errors** - they're visible even in production

5. **Don't log sensitive information** (passwords, tokens, etc.)

## TypeScript Types

```typescript
import { log, type Logger, type LogLevel } from '@my-scope/smart-logger';

// Logger interface
interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

// LogLevel type
type LogLevel = 'info' | 'warn' | 'error' | 'debug';
```


