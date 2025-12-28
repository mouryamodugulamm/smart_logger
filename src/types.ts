/**
 * Log level types
 */
export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

/**
 * Logger interface
 */
export interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}
