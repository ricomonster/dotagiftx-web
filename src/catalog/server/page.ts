// Interfaces
import type { PageServerLoad as CatalogPageServerLoad } from '$routes/[slug]/$types';

// Packages
import { getCatalog } from '$package/dotagiftx';
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
