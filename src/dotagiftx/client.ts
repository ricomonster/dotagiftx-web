import { ok, err } from 'neverthrow';

// Interfaces
import type { Result as NeverthrowResult } from 'neverthrow';

// Config
import { API } from './config';

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

export const send = async <T, U>(options: SendOptions<T>): Promise<Result<U>> => {
  const url = [API, options.path].join('/');

  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  if (options.body) {
    config.body = JSON.stringify(options.body);
  }

  console.log('config ::', JSON.stringify({ url, ...config }));

  const response = await fetch(url, config);

  if (response.ok) {
    const json = await response.json() as U;

    console.log('json ::', JSON.stringify(json));
    return ok(json);
  }

  const error = await response.json() as DotagiftxError;
  return err({
    status: response.status || 500,
    message: error.msg
  });
};
