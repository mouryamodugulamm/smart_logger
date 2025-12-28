# Quick Start Guide

## 🚀 Installation

```bash
npm install @my-scope/smart-logger
```

## 📝 Basic Usage

### Step 1: Import the logger

```javascript
import { log } from '@my-scope/smart-logger';
```

### Step 2: Use it!

```javascript
log.info('Application started');
log.warn('This is a warning');
log.error('Something went wrong');
log.debug('Debug info'); // Only shows if DEBUG=true
```

## 🎯 Common Patterns

### In Your Application

```javascript
// app.js
import { log } from '@my-scope/smart-logger';

log.info('Starting server...');

app.listen(3000, () => {
  log.info('Server running on http://localhost:3000');
});

app.get('/api/data', (req, res) => {
  log.info(`GET /api/data from ${req.ip}`);
  log.debug(`Query: ${JSON.stringify(req.query)}`);
  res.json({ data: 'example' });
});
```

### Error Handling

```javascript
try {
  await riskyOperation();
  log.info('Operation successful');
} catch (error) {
  log.error(`Operation failed: ${error.message}`);
  log.debug(`Stack: ${error.stack}`);
}
```

### Conditional Debugging

```javascript
function processData(data) {
  log.debug(`Processing: ${JSON.stringify(data)}`);
  
  // ... your code ...
  
  log.info('Data processed');
}
```

## 🎨 Output

You'll see colored, timestamped logs:

```
[10:30:45] [INFO] Application started
[10:30:46] [WARN] This is a warning
[10:30:47] [ERROR] Something went wrong
[10:30:48] [DEBUG] Debug information
```

## ⚙️ Environment Variables

### Show Debug Logs
```bash
DEBUG=true node app.js
```

### Production Mode (only errors)
```bash
NODE_ENV=production node app.js
```

## 📚 More Examples

See the `examples/` directory:
- `basic-usage.js` - Simple examples
- `real-world.js` - Real-world scenarios
- `typescript-usage.ts` - TypeScript examples

Run them:
```bash
node examples/basic-usage.js
node examples/real-world.js
```

## 🧪 Test It

```bash
npm test
```

That's it! You're ready to use smart-logger. 🎉

