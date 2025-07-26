import qs from 'qs';

// Interfaces
import type { Result, DotagiftxList } from './client';
import type { Item } from './item';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export type CatalogSort = 'popular' | 'recent' | 'recent-bid' | 'sale_count:desc' | 'sale_count:asc' | 'trending'

export interface Catalog extends Omit<Item, 'active'> {
  asks: unknown;
  avg_sale: number;
  bid_count: number;
  bids: unknown;
  highest_bid: number;
  lowest_ask: number;
  median_ask: number;
  recent_ask: string;
  recent_bid: string;
  recent_sale: string;
  reserved_count: number;
  sale_count: number;
  sold_count: number;
  view_count: number;
}

export interface GetCatalogOpts {
  limit?: number;
  page?: number;
  q?: string;
  sort?: CatalogSort;
}

/**
 * Get catalog list
 *
 * @param {GetCatalogOpts} opts
 * @returns {Promise<Result<DotagiftxList<Catalog[]>>}
 */
export const getCatalogs = (opts: GetCatalogOpts): Promise<Result<DotagiftxList<Catalog[]>>> => {
  let path = PATHS.CATALOG_LIST;
  if (opts.sort && opts.sort === 'trending') {
    path = PATHS.CATALOGS_TRENDING_TOP10;
  }

  const query = qs.stringify(opts);
  if (query) {
    path += `?${query}`;
  }

  return send<unknown, DotagiftxList<Catalog[]>>({ path });
};

/**
 * Get catalogs trending top 10
 *
 * @returns {Promise<Result<DotagiftxList<Catalog[]>>}
 */
export const getCatalogTrending = (): Promise<Result<DotagiftxList<Catalog[]>>> => {
  let path = PATHS.CATALOGS_TRENDING_TOP10;
  path += '?nocache=1';

  return send<unknown, DotagiftxList<Catalog[]>>({ path });
};
