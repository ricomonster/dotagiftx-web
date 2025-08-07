import type { Keyword } from '$package/dotagiftx';

/**
 * Fetches the top keywords
 *
 * @returns {Promise<Keyword[]>}
 */
export const getTopKeywords = async (): Promise<Keyword[]> => {
  const response = await fetch('/api/stats/top_keywords');
  if (response.ok) {
    const json = await response.json() as Keyword[];
    return json;
  }

  const error = await response.json() as { message: string };
  console.error('[getTopKeywords]', error.message);

  return [];
};
