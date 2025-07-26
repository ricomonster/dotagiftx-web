// Interfaces
import type { PageServerLoad } from '$routes/$types';

// Packages
import { getTopHeroes } from '$package/dotagiftx';

export const load: PageServerLoad = async () => {
  const heroes = await getTopHeroes();

  return {
    heroes: heroes.isOk() ? heroes.value : []
  };
};
