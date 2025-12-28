/**
 * TypeScript test file for @my-scope/smart-logger
 * Compile with: npx tsc test.ts --module es2020 --moduleResolution node
 * Run with: node test.js
 */

import { log } from './dist/index.js';

console.log('\n=== Testing Smart Logger ===\n');

// Test info logs
log.info('This is an info message');
log.info('Application initialized successfully');

// Test warn logs
log.warn('This is a warning message');
log.warn('Deprecated API will be removed in v2.0');

// Test error logs
log.error('This is an error message');
log.error('Failed to connect to database');

// Test debug logs (will only show if DEBUG=true)
log.debug('This is a debug message');
log.debug('Processing request with ID: 12345');

console.log('\n=== Test Complete ===\n');
console.log('💡 Tip: Run with DEBUG=true to see debug logs');
console.log('💡 Tip: Run with NODE_ENV=production to test production mode\n');

