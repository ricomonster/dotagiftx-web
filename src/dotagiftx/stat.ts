// Interfaces
import type { Hero } from './hero';
import type { Result } from './types';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export interface Keyword {
  keyword: string;
  score: number;
}

/**
 * Fetches the top keywords
 *
 * @returns {Promise<Result<Keyword[]>>}
 */
export const getTopKeywords = (): Promise<Result<Keyword[]>> => {
  return send<unknown, Keyword[]>({ path: PATHS.STATS_TOP_KEYWORDS });
};

/**
 * Fetches the top heroes
 *
 * @returns {Promise<Result<string[]>>}
 */
export const getTopHeroes = (): Promise<Result<Hero[]>> => {
  return send<unknown, Hero[]>({ path: PATHS.STATS_TOP_HEROES });
};

