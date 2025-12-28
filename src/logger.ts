import type { LogLevel, Logger } from './types.js';

/**
 * ANSI color codes
 */
const Colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
} as const;

/**
 * Get current timestamp in HH:MM:SS format
 */
function getTimestamp(): string {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Check if running in production environment
 */
function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Check if debug mode is enabled
 */
function isDebugEnabled(): boolean {
  return process.env.DEBUG === 'true';
}

/**
 * Format log message with timestamp and level prefix
 */
function formatMessage(level: LogLevel, message: string): string {
  const timestamp = getTimestamp();
  const levelUpper = level.toUpperCase();
  return `[${timestamp}] [${levelUpper}] ${message}`;
}

/**
 * Get color code for log level
 */
function getColor(level: LogLevel): string {
  switch (level) {
    case 'info':
      return Colors.blue;
    case 'warn':
      return Colors.yellow;
    case 'error':
      return Colors.red;
    case 'debug':
      return Colors.gray;
    default:
      return Colors.reset;
  }
}

/**
 * Check if log should be output based on environment
 */
function shouldLog(level: LogLevel): boolean {
  // Always log errors
  if (level === 'error') {
    return true;
  }

  // In production, only errors are logged
  if (isProduction()) {
    return false;
  }

  // Debug logs only when DEBUG=true
  if (level === 'debug') {
    return isDebugEnabled();
  }

  // Info and warn are logged in non-production
  return true;
}

/**
 * Output log message to console
 */
function outputLog(level: LogLevel, message: string): void {
  if (!shouldLog(level)) {
    return;
  }

  const formatted = formatMessage(level, message);
  const color = getColor(level);
  const reset = Colors.reset;
  const bright = level === 'error' ? Colors.bright : '';

  // Use appropriate console method
  switch (level) {
    case 'error':
      console.error(`${bright}${color}${formatted}${reset}`);
      break;
    case 'warn':
      console.warn(`${color}${formatted}${reset}`);
      break;
    case 'debug':
      console.debug(`${color}${formatted}${reset}`);
      break;
    default:
      console.log(`${color}${formatted}${reset}`);
  }
}

/**
 * Smart logger implementation
 */
class SmartLogger implements Logger {
  info(message: string): void {
    outputLog('info', message);
  }

  warn(message: string): void {
    outputLog('warn', message);
  }

  error(message: string): void {
    outputLog('error', message);
  }

  debug(message: string): void {
    outputLog('debug', message);
  }
}

/**
 * Export singleton logger instance
 */
export const log = new SmartLogger();

