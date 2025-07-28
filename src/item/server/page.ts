// Interfaces
import type { PageServerLoad as DetailPageServerLoad } from '$routes/[itemId]/$types';

// Packages
import { getItem, getMarket } from '$package/dotagiftx';
import { error } from '@sveltejs/kit';

export const detail: DetailPageServerLoad = async ({ params }) => {
  const { itemId } = params;

  const item = await getItem(itemId);
  if (item.isErr()){
    console.error('[item.server.page] detail', item.error);
    error(item.error.status || 500, 'Something went wrong');
  }

  const offers = await getMarket({
    index: 'item_id',
    inventory_status: 200,
    item_id: item.value.id,
    sort: 'lowest',
    status: 200,
    type: 10,
  });

  return {
    item: item.value,
    offers: offers.isOk() ? offers.value : {},
  };
};
