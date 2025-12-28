/**
 * Live test with real-time timestamp updates
 * Shows logs with live timestamps updating every second
 */

import { log } from './dist/index.js';

console.log('\n=== Live Logger Test (Real-time) ===\n');
console.log('Watch the timestamps update in real-time...\n');

let counter = 0;

const interval = setInterval(() => {
  counter++;
  
  log.info(`Live test message #${counter}`);
  
  if (counter % 3 === 0) {
    log.warn(`Warning message #${counter / 3}`);
  }
  
  if (counter % 5 === 0) {
    log.error(`Error message #${counter / 5}`);
  }
  
  if (counter % 7 === 0) {
    log.debug(`Debug message #${counter / 7}`);
  }
  
  // Stop after 30 seconds
  if (counter >= 30) {
    clearInterval(interval);
    console.log('\n✅ Live test complete\n');
    process.exit(0);
  }
}, 1000); // Update every second

// Handle Ctrl+C
process.on('SIGINT', () => {
  clearInterval(interval);
  console.log('\n\n⏹️  Stopped\n');
  process.exit(0);
});

