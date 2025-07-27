
import { ok, err } from 'neverthrow';

// Interfaces
import type { SendOptions, Result, DotagiftxError } from './types';

// Config
import { API } from './config';


export const send = async <T, U>(options: SendOptions<T>): Promise<Result<U>> => {
  const url = [API, options.path].join('/');

  const config: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    signal: AbortSignal.timeout(60000)
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
