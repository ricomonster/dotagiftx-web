// Interfaces
import type { Result as NeverthrowResult } from 'neverthrow';

export interface DotagiftxError {
  error: boolean;
  msg: string;
}

export interface DotagiftxList<T> {
  data: T;
  result_count: number;
  total_count: number;
}

export interface ResultError {
  message: string;
  error?: Error;
  status?: number;
}

export type Result<T> = NeverthrowResult<T, ResultError>;

export interface SendOptions<T> {
  path: string
  headers?: [string, string][] | Record<string, string> | Headers
  method?: string
  body?: T
}
