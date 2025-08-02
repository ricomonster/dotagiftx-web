import qs from 'qs';

// Interface
import type { Catalog, GetCatalogOpts } from '$package/dotagiftx';
import type { DotagiftxList } from '$package/dotagiftx';

export const getCatalogs = async (opts: GetCatalogOpts): Promise<DotagiftxList<Catalog[]>> => {
  let url = '/api/catalogs';
  if (Object.keys(opts).length !== 0) {
    url += `?${qs.stringify(opts)}`;
  }

  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json() as DotagiftxList<Catalog[]>;
    return json;
  }

  const error = await response.json() as { message: string };
  throw Error(error.message);
};
