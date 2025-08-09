// Interfaces
import type { PageServerLoad as CatalogPageServerLoad } from '$routes/[slug]/$types';
import type { PageServerLoad as SearchPageServerLoad } from '$routes/search/$types';

// Packages
import { getCatalog, getCatalogs, type Rarity } from '$package/dotagiftx';
import { error } from '@sveltejs/kit';

export const catalog: CatalogPageServerLoad = async ({ params }) => {
  const { slug } = params;

  const catalog = await getCatalog(slug);
  if (catalog.isErr()){
    console.error('[item.server.page] detail', catalog.error);
    error(catalog.error.status || 500, 'Something went wrong');
  }

  return {
    catalog: catalog.value
  };
};

export const search: SearchPageServerLoad = async ({ url }) => {
  const hero = url.searchParams.get('hero');
  const origin = url.searchParams.get('origin');
  const q = url.searchParams.get('q');
  const rarity = url.searchParams.get('rarity');

  const result = await getCatalogs({
    ...(hero && { hero }),
    ...(origin && { origin }),
    ...(q && { q }),
    ...(rarity && { rarity: rarity as Rarity }),
    sort: 'popular',
  });

  return {
    catalogs: result.isOk() ? result.value : {}
  };
};
