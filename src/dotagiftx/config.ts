import { PUBLIC_DOTAGIFTX_PATHS, PUBLIC_DOTAGIFTX_API } from '$env/static/public';

export interface Paths {
  AUTH_RENEW: string;
  AUTH_REVOKE: string;
  AUTH_STEAM: string;
  CATALOGS_TRENDING_TOP10: string;
  CATALOG: string;
  CATALOG_LIST: string;
  FLAGGED_USERS: string;
  GRAPH_MARKET_SALES: string;
  IMAGE: string;
  IMAGE_UPLOAD: string;
  ITEM_CREATE: string;
  ITEM_DETAILS: string;
  ITEM_IMPORT: string;
  ITEM_LIST: string;
  MANUAL_SUBSCRIPTION: string;
  MARKET_DETAILS: string;
  MARKET_LIST: string;
  MY_MARKET: string;
  MY_MARKET_DETAILS: string;
  MY_MARKET_UPDATE: string;
  PROCESS_SUBSCRIPTION: string;
  PROFILE_DETAILS: string;
  REPORTS_DETAILS: string;
  REPORTS_LIST: string;
  STATS_MARKET_SUMMARY: string;
  STATS_TOP_HEROES: string;
  STATS_TOP_KEYWORDS: string;
  STATS_TOP_ORIGINS: string;
  SUBMIT_SURVEY: string;
  TRACK_ITEM: string;
  USER_DETAILS: string;
  USER_VANITY: string;
  WEBHOOK_PAYPAL: string;
  WEBHOOK_PHANTASM: string;
}

export const PATHS = JSON.parse(PUBLIC_DOTAGIFTX_PATHS) as Paths;
export const API = PUBLIC_DOTAGIFTX_API;
