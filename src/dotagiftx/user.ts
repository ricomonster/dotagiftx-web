// Interfaces
import type { MarketStats } from './market';
import type { Result } from './types';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export type Boon = 'SHOPKEEPERS_CONTRACT' | 'REFRESHER_ORB' | 'REFRESHER_SHARD'

export interface User {
  id: string;
  avatar: string;
  boons: Boon[];
  created_at: string;
  donated_at: unknown;
  donation: number;
  hammer: boolean;
  market_stats: MarketStats;
  name: string;
  notes: string;
  rank_score: number;
  status: number;
  steam_id: string;
  subscribed_at: unknown;
  subscription: number;
  subscription_ends_at: string;
  subscription_type: string;
  updated_at: string;
  url: string;
}

/**
 * Get the user details
 *
 * @param {string} steamId
 * @returns {Promise<Result<User>>}
 */
export const getUser = (steamId: string): Promise<Result<User>> => {
  const path = PATHS.USER_DETAILS.replace(':id', steamId);
  return send<unknown, User>({
    path
  });
};
