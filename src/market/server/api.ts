// Interfaces
import type { RequestHandler } from '$routes/api/markets/$types';
import type {
  Hero,
  MarketIndex,
  MarketOptions,
  MarketSort,
  MarketType,
  MarketTypeName
} from '$package/dotagiftx';

// Modules
import { getMarket, MARKET_TYPE} from '$package/dotagiftx';

/**
 * GET /api/markets
 */
export const GET: RequestHandler = async ({ url }) => {
  const hero  = url.searchParams.get('hero');
  const index  = url.searchParams.get('index');
  const inventoryStatus  = url.searchParams.get('inventory_status');
  const itemId  = url.searchParams.get('item_id');
  const limit = url.searchParams.get('limit');
  const nocache  = url.searchParams.get('nocache');
  const sort  = url.searchParams.get('sort');
  const status  = url.searchParams.get('status');
  const type  = url.searchParams.get('type');
  const userId  = url.searchParams.get('user_id');

  const opts: MarketOptions = { index: 'item_id' };
  if (index) {
    opts.index = index as MarketIndex;
  }

  if (inventoryStatus) {
    opts.inventory_status = parseInt(inventoryStatus, 10);
  }

  if (itemId && index === 'item_id') {
    opts.item_id = itemId;
  }

  if (nocache) {
    opts.nocache = nocache === 'true';
  }

  if (sort) {
    opts.sort = sort as MarketSort;
  }

  if (status) {
    opts.status = parseInt(status, 10);
  }

  if (type) {
    opts.type = typeof type === 'string' ?
      MARKET_TYPE[type as MarketTypeName] :
      parseInt(type, 10) as MarketType;
  }

  if (userId && index === 'user_id') {
    opts.user_id = userId;
  }

  if (hero && index === 'hero') {
    opts.hero = hero as Hero;
  }

  if (limit) {
    opts.limit = parseInt(limit, 10);
  }

  const result = await getMarket(opts);
  if (result.isOk()) {
    return new Response(JSON.stringify(result.value), { status: 200 });
  }

  return new Response(
    JSON.stringify({ message: result.error.message }),
    { status: result.error.status || 500 }
  );
};
