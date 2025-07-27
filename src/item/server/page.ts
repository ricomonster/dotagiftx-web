// Interfaces
import type { PageServerLoad as DetailPageServerLoad } from '$routes/[itemId]/$types';

// Packages
import { getItem } from '$package/dotagiftx';
import { error } from '@sveltejs/kit';

export const detail: DetailPageServerLoad = async ({ params }) => {
  const { itemId } = params;

  const item = await getItem(itemId);
  if (item.isErr()){
    console.error('[item.server.page] detail', item.error);
    error(item.error.status || 500, 'Something went wrong');
  }

  return {
    item: item.value
  };
};
