import qs from 'qs';

// Interfaces
import type { Item } from './item';
import type { Result, DotagiftxList } from './types';
import type { User } from './user';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export interface Market {
  id: string;
  created_at: string;
  currency: string;
  delivery_status: number;
  inventory_status: number;
  item: Item;
  item_id: string;
  notes: string;
  partner_steam_id: string;
  price: number;
  resell: unknown;
  seller_steam_id: string;
  status: number;
  type: number;
  updated_at: string;
  user: User;
  user_id: string;
  user_rank_score: number;
}

export interface MarketStats {
  bid_completed: number;
  bid_live: number;
  cancelled: number;
  delivery_error: number;
  delivery_name_verified: number;
  delivery_no_hit: number;
  delivery_private: number;
  delivery_sender_verified: number;
  inventory_error: number;
  inventory_no_hit: number;
  inventory_private: number;
  inventory_verified: number;
  live: number;
  pending: number;
  removed: number;
  resell_cancelled: number;
  resell_live: number;
  resell_removed: number;
  resell_reserved: number;
  resell_sold: number;
  reserved: number;
  sold: number;
}

export type MarketSort = 'highest' | 'recent' | 'best' | 'lowest'

export interface MarketOptions {
  index?: string;
  inventory_status?: number;
  item_id?: string;
  nocache?: boolean;
  sort?: MarketSort
  status?: number;
  type?: number;
}

/**
 * Get market items
 *
 * @param {MarketOptions} opts
 * @returns {Promise<Result<DotagiftxList<Market[]>>}
 */
export const getMarket = async (opts: MarketOptions): Promise<Result<DotagiftxList<Market[]>>> => {
  let path = PATHS.MARKET_LIST;

  if (Object.keys(opts).length !== 0) {
    path += `?${qs.stringify(opts)}`;
  }

  return send<unknown, DotagiftxList<Market[]>>({ path });
};
