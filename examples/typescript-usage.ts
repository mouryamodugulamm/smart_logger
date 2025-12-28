/**
 * TypeScript Usage Example
 * Compile: npx tsc examples/typescript-usage.ts --module es2020 --moduleResolution node
 * Run: node examples/typescript-usage.js
 */

import { log, type Logger, type LogLevel } from '../dist/index.js';

// Using the logger
log.info('TypeScript example');
log.warn('Type-safe logging');

// You can also use the types
const logger: Logger = log;
const level: LogLevel = 'info';

logger.info(`Current log level: ${level}`);

// Example: Function with logging
function processData(data: string): void {
  log.debug(`Processing data: ${data}`);
  
  try {
    // Simulate processing
    if (data.length === 0) {
      log.warn('Empty data received');
      return;
    }
    
    log.info(`Data processed successfully: ${data.length} characters`);
  } catch (error) {
    log.error(`Failed to process data: ${error}`);
  }
}

processData('Hello World');
processData('');


