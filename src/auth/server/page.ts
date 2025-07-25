import type { PageServerLoad as SteamPageServerLoad } from '$routes/auth/steam/$types';

// Modules
import { getAuthSteamURL } from '$src/dotagiftx';
import { redirect } from '@sveltejs/kit';

export const steam: SteamPageServerLoad = async () => {
  const url = getAuthSteamURL();
  redirect(302, url);
};
