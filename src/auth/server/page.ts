import { redirect } from '@sveltejs/kit';

// Interfaces
import type { PageServerLoad as SteamPageServerLoad } from '$routes/auth/steam/$types';

// Package
import { getAuthSteamURL } from '$package/dotagiftx';

export const steam: SteamPageServerLoad = async () => {
  const url = getAuthSteamURL();
  redirect(302, url);
};
