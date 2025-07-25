// Config
import { API, PATHS } from './config';

/**
 * Returns the URL for user to authenticate with Steam.
 *
 * @returns {string}
 */
export const getAuthSteamURL = (): string => {
  return [API, PATHS.AUTH_STEAM].join('/');
};
