// Interfaces
import type { RequestHandler } from '$routes/api/markets/$types';
import type { MarketOptions, MarketSort } from '$package/dotagiftx';

// Modules
import { getMarket } from '$package/dotagiftx';

/**
 * GET /api/markets
 */
export const GET: RequestHandler = async ({ url }) => {
  const index  = url.searchParams.get('index');
  const inventoryStatus  = url.searchParams.get('inventory_status');
  const itemId  = url.searchParams.get('item_id');
  const nocache  = url.searchParams.get('nocache');
  const sort  = url.searchParams.get('sort');
  const status  = url.searchParams.get('status');
  const type  = url.searchParams.get('type');

  const opts: MarketOptions = {};
  if (index) {
    opts.index = index;
  }

  if (inventoryStatus) {
    opts.inventory_status = parseInt(inventoryStatus, 10);
  }

  if (itemId) {
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
    opts.type = parseInt(type, 10);
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
