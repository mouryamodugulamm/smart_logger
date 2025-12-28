/**
 * Basic Usage Example
 * Run: node examples/basic-usage.js
 */

import { log } from '../dist/index.js';

// Basic logging
log.info('Application started');
log.warn('This is a warning');
log.error('Something went wrong');
log.debug('Debug information'); // Only shows if DEBUG=true

