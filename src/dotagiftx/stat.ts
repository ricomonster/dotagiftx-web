// Interfaces
import type { Result } from './types';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

/**
 * Fetches the top heroes
 *
 * @returns {Promise<Result<string[]>>}
 */
export const getTopHeroes = (): Promise<Result<string[]>> => {
  return send<unknown, string[]>({ path: PATHS.STATS_TOP_HEROES });
};
