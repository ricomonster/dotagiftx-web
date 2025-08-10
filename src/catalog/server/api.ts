// Interfaces
import type { RequestHandler } from '$routes/api/catalogs/$types';
import type { CatalogSort, Hero, Rarity } from '$package/dotagiftx';

// Modules
import { getCatalogs } from '$package/dotagiftx';

/**
 * GET /api/catalog
 */
export const GET: RequestHandler = async ({ url }) => {
  // Extract all params at once
  const params = Object.fromEntries(url.searchParams);
  const {
    hero,
    index,
    limit,
    origin,
    page,
    q,
    rarity,
    sort,
  } = params;

  const result = await getCatalogs({
    ...(hero && { hero: hero as Hero }),
    ...(index && { index }),
    ...(limit && { limit: parseInt(limit, 10) }),
    ...(origin && { origin }),
    ...(page && { page: parseInt(page, 10) }),
    ...(q && { q }),
    ...(rarity && { rarity: rarity as Rarity }),
    ...(sort && { sort: sort as CatalogSort }),
  });

  if (result.isOk()) {
    return new Response(JSON.stringify(result.value), { status: 200 });
  }

  return new Response(
    JSON.stringify({ message: result.error.message }),
    { status: result.error.status || 500 }
  );
};
