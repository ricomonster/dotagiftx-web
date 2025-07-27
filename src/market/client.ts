import qs from 'qs';

// Interface
import type { Market, MarketOptions } from '$package/dotagiftx';
import type { DotagiftxList } from '$package/dotagiftx';

export const getMarket = async (opts: MarketOptions): Promise<DotagiftxList<Market[]>> => {
  let url = '/api/markets';
  if (Object.keys(opts).length !== 0) {
    url += `?${qs.stringify(opts)}`;
  }

  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json() as DotagiftxList<Market[]>;
    return json;
  }

  const error = await response.json() as { message: string };
  throw Error(error.message);
};
