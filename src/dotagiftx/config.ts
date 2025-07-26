import { PUBLIC_DOTAGIFTX_PATHS, PUBLIC_DOTAGIFTX_API } from '$env/static/public';

export interface Paths {
  CATALOG_LIST: string;
  AUTH_STEAM: string;
  AUTH_RENEW: string;
  AUTH_REVOKE: string;
  USER_DETAILS: string;
  USER_VANITY: string;
  ITEM_LIST: string;
  IMAGE: string;
  ITEM_DETAILS: string;
  MARKET_LIST: string;
  MARKET_DETAILS: string;
  CATALOGS_TRENDING_TOP10: string;
  TRACK_ITEM: string;
  STATS_TOP_ORIGINS: string;
  STATS_TOP_HEROES: string;
  STATS_TOP_KEYWORDS: string;
  STATS_MARKET_SUMMARY: string;
  GRAPH_MARKET_SALES: string;
  REPORTS_LIST: string;
  REPORTS_DETAILS: string;
  FLAGGED_USERS: string;
  WEBHOOK_PAYPAL: string;
  WEBHOOK_PHANTASM: string;
  PROFILE_DETAILS: string;
  IMAGE_UPLOAD: string;
  ITEM_CREATE: string;
  MY_MARKET: string;
  MY_MARKET_DETAILS: string;
  MY_MARKET_UPDATE: string;
  PROCESS_SUBSCRIPTION: string;
  MANUAL_SUBSCRIPTION: string;
  ITEM_IMPORT: string;
  SUBMIT_SURVEY: string;
}

export const PATHS = JSON.parse(PUBLIC_DOTAGIFTX_PATHS) as Paths;
export const API = PUBLIC_DOTAGIFTX_API;
