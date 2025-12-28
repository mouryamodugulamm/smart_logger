/**
 * Real-world Usage Example
 * Run: node examples/real-world.js
 */

import { log } from '../dist/index.js';

// Simulate a web server
function startServer() {
  log.info('Starting HTTP server...');
  log.info('Server listening on port 3000');
  
  // Simulate requests
  setTimeout(() => {
    log.info('GET /api/users - 200 OK');
  }, 1000);
  
  setTimeout(() => {
    log.warn('GET /api/old-endpoint - 301 Redirect');
  }, 2000);
  
  setTimeout(() => {
    log.error('GET /api/data - 500 Internal Server Error');
    log.debug('Error details: Database connection timeout');
  }, 3000);
  
  setTimeout(() => {
    log.info('Server shutting down gracefully');
  }, 4000);
}

startServer();


