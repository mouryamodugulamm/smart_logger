/**
 * Simple file watcher for real-time testing
 * Watches src/ and dist/ directories and re-runs test on changes
 */

import { watch } from 'fs';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let testProcess = null;

function runTest() {
  // Kill previous test process if running
  if (testProcess) {
    testProcess.kill();
  }

  console.log('\n🔄 Re-running tests...\n');
  
  testProcess = spawn('node', ['test.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true
  });

  testProcess.on('exit', (code) => {
    if (code === 0) {
      console.log('\n✅ Test completed\n');
    } else {
      console.log('\n❌ Test failed\n');
    }
  });
}

function watchDirectory(dir) {
  watch(dir, { recursive: true }, (eventType, filename) => {
    if (filename && !filename.includes('node_modules')) {
      console.log(`\n📁 File changed: ${filename}`);
      // Debounce: wait a bit before running test
      setTimeout(() => {
        runTest();
      }, 300);
    }
  });
}

console.log('👀 Watching for file changes...');
console.log('📂 Watching: src/, dist/');
console.log('⏹️  Press Ctrl+C to stop\n');

// Initial test run
runTest();

// Watch source and dist directories
watchDirectory(join(__dirname, 'src'));
watchDirectory(join(__dirname, 'dist'));


