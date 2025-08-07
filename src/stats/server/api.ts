// Interfaces
import { getTopKeywords } from '$package/dotagiftx';
import type { RequestHandler } from '$routes/api/stats/top_keywords/$types';


/**
 * GET /api/stats/top_keywordss
 */
export const GETTopKeywords: RequestHandler = async () => {
  const result = await getTopKeywords();

  if (result.isOk()) {
    return new Response(JSON.stringify(result.value), { status: 200 });
  }

  return new Response(
    JSON.stringify({ message: result.error.message }),
    { status: result.error.status || 500 }
  );
};
