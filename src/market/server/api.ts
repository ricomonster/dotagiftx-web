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
  // Extract all params at once
  const params = Object.fromEntries(url.searchParams);
  const {
    hero,
    index = 'item_id',
    inventory_status,
    item_id,
    limit,
    nocache,
    page,
    sort,
    status,
    type,
    user_id
  } = params;

  // Build options object with type conversions
  const opts: MarketOptions = {
    index: index as MarketIndex,
    ...(inventory_status && { inventory_status: parseInt(inventory_status, 10) }),
    ...(item_id && index === 'item_id' && { item_id }),
    ...(user_id && index === 'user_id' && { user_id }),
    ...(hero && index === 'hero' && { hero: hero as Hero }),
    ...(nocache && { nocache: nocache === 'true' }),
    ...(sort && { sort: sort as MarketSort }),
    ...(status && { status: parseInt(status, 10) }),
    ...(type && {
      type: typeof type === 'string'
        ? MARKET_TYPE[type as MarketTypeName]
        : parseInt(type, 10) as MarketType
    }),
    ...(limit && { limit: parseInt(limit, 10) }),
    ...(page && { page: parseInt(page, 10) })
  };

  // Handle response
  const result = await getMarket(opts);

  return result.isOk()
    ? new Response(JSON.stringify(result.value), { status: 200 })
    : new Response(
      JSON.stringify({ message: result.error.message }),
      { status: result.error.status || 500 }
    );
};
