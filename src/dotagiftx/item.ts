// Interfaces
import type { Hero } from './hero';
import type { Result } from './types';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export type Rarity = 'very rare' | 'rare' | 'regular' | 'ultra rare'

export interface Item {
  id: string;
  slug: string;
  name: string;
  hero: Hero;
  image: string;
  origin: string;
  rarity: Rarity;
  active: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}

/**
 * Get item details
 *
 * @param {string} item
 * @returns {Promise<Result<Item>>}
 */
export const getItem = (item: string): Promise<Result<Item>> => {
  return send<unknown, Item>({
    path: PATHS.ITEM_DETAILS.replace(':id', item)
  });
};
