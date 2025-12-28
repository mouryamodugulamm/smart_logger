# @my-scope/smart-logger

A smart console logger with colored output, timestamps, and environment-aware logging. Zero dependencies, TypeScript-first, and production-ready.

## What Problem It Solves

Standard `console.log` lacks structure, colors, and environment awareness. This package provides:

- **Colored logs** for better readability
- **Automatic timestamps** in HH:MM:SS format
- **Log levels** (info, warn, error, debug) with prefixes
- **Environment-aware** output (silent in production except errors)
- **Zero dependencies** for minimal bundle size
- **TypeScript-first** with full type definitions

## Installation

```bash
npm install @my-scope/smart-logger
```

## Usage

### Basic Usage

```typescript
import { log } from '@my-scope/smart-logger';

log.info('Application started');
log.warn('This is a warning');
log.error('An error occurred');
log.debug('Debug information');
```

### Output Examples

```
[10:30:45] [INFO] Application started
[10:30:46] [WARN] This is a warning
[10:30:47] [ERROR] An error occurred
[10:30:48] [DEBUG] Debug information
```

Logs are colored:
- **Info**: Blue
- **Warn**: Yellow
- **Error**: Red (bright)
- **Debug**: Gray

## API Reference

### `log.info(message: string)`

Logs an informational message. Visible in all environments except production.

```typescript
log.info('User logged in');
```

### `log.warn(message: string)`

Logs a warning message. Visible in all environments except production.

```typescript
log.warn('Deprecated API used');
```

### `log.error(message: string)`

Logs an error message. **Always visible**, including in production.

```typescript
log.error('Failed to connect to database');
```

### `log.debug(message: string)`

Logs a debug message. Only visible when `DEBUG=true` environment variable is set.

```typescript
log.debug('Processing request with ID: 123');
```

## Environment Variables

### `NODE_ENV`

Controls production mode behavior:

- **`production`**: Only `error` logs are output
- **Other values** (development, test, etc.): All logs except `debug` are output

```bash
NODE_ENV=production node app.js
```

### `DEBUG`

Controls debug log visibility:

- **`true`**: Debug logs are visible (in non-production environments)
- **Not set or other values**: Debug logs are hidden

```bash
DEBUG=true node app.js
```

## Environment Behavior Summary

| Log Level | Development | Production | With DEBUG=true |
|-----------|-------------|------------|-----------------|
| `info`    | ✅ Visible  | ❌ Hidden  | ✅ Visible      |
| `warn`    | ✅ Visible  | ❌ Hidden  | ✅ Visible      |
| `error`   | ✅ Visible  | ✅ Visible | ✅ Visible      |
| `debug`   | ❌ Hidden   | ❌ Hidden  | ✅ Visible      |

## Publishing Instructions

1. **Build the package**:
   ```bash
   npm run build
   ```

2. **Verify the build**:
   ```bash
   ls dist/
   ```

3. **Publish to npm**:
   ```bash
   npm publish --access public
   ```

4. **Version updates**:
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

## TypeScript Support

Full TypeScript support with type definitions included:

```typescript
import { log, type Logger, type LogLevel } from '@my-scope/smart-logger';

// log is typed as Logger
log.info('Typed logger');

// LogLevel type: 'info' | 'warn' | 'error' | 'debug'
const level: LogLevel = 'info';
```

## Tree-Shaking

The package is tree-shakable. Bundlers can eliminate unused code:

```typescript
// Only imports what you use
import { log } from '@my-scope/smart-logger';
```

## License

MIT

