// Interfaces
import type { RequestHandler } from '$routes/api/catalogs/$types';
import type { CatalogSort, GetCatalogOpts } from '$src/dotagiftx';

// Modules
import { getCatalogs } from '$src/dotagiftx';

/**
 * GET /api/catalog
 */
export const GET: RequestHandler = async ({ url }) => {
  const limit  = url.searchParams.get('limit');
  const page  = url.searchParams.get('page');
  const q  = url.searchParams.get('q');
  const sort  = url.searchParams.get('sort');

  const opts: GetCatalogOpts = {};
  if (limit) {
    opts.limit = parseInt(limit, 10);
  }

  if (page) {
    opts.page = parseInt(page, 10);
  }

  if (q) {
    opts.q = q;
  }

  if (sort) {
    opts.sort = sort as CatalogSort;
  }


  const result = await getCatalogs(opts);
  if (result.isOk()) {
    return new Response(JSON.stringify(result.value), { status: 200 });
  }

  return new Response(
    JSON.stringify({ message: result.error.message }),
    { status: result.error.status || 500 }
  );
};
