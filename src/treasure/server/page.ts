// Interfaces
import type { PageServerLoad } from '$routes/treasures/$types';

// API
import { getTreasures } from '$package/dotagiftx';

export const load: PageServerLoad = async () => {
  return {
    treasures: getTreasures()
  };
};
