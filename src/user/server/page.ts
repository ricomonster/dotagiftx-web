import { error } from '@sveltejs/kit';

// Interfaces
import type { PageServerLoad as ProfilePageServerLoad } from '$routes/profiles/[profileId]/[action]/$types';

// Packages
import { getUser } from '$package/dotagiftx';

export const profile: ProfilePageServerLoad = async ({ params }) => {
  const { profileId, action } = params;

  const profile = await getUser(profileId);
  if (profile.isErr()){
    console.error('[user.server.page] detail', profile.error);
    error(profile.error.status || 500,  profile.error.message || 'Something went wrong');
  }

  return {
    action,
    profile: profile.value
  };
};
