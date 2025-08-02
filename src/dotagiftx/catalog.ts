import qs from 'qs';

// Interfaces
import type { Item } from './item';
import type { Market } from './market';
import type { Result, DotagiftxList } from './types';

// Client
import { send } from './client';

// Config
import { PATHS } from './config';

export type CatalogSort = 'popular' | 'recent' | 'recent-bid' | 'sale_count:desc' | 'sale_count:asc' | 'trending'

export interface Catalog extends Omit<Item, 'active'> {
  asks: Market[];
  avg_sale: number;
  bid_count: number;
  bids: unknown;
  highest_bid: number;
  lowest_ask: number;
  median_ask: number;
  quantity: number;
  recent_ask: string;
  recent_bid: string;
  recent_sale: string;
  reserved_count: number;
  sale_count: number;
  sold_count: number;
  view_count: number;
}

export interface GetCatalogOpts {
  hero?: string;
  limit?: number;
  page?: number;
  q?: string;
  sort?: CatalogSort;
  index?: 'hero';
}


/**
 * Get catalog details
 *
 * @param {string} slug
 * @returns {Promise<Result<Catalog>>}
 */
export const getCatalog = (slug: string): Promise<Result<Catalog>> => {
  return send<unknown, Catalog>({
    path: PATHS.CATALOG.replace(':slug', slug)
  });
};

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
  console.log('query', query);
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
