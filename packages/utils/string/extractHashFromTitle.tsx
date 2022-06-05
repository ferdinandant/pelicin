/**
 * Extracts anchor hash (e.g. '#my-title') from a string
 */
export default function extractHashFromTitle(title: string) {
  const result = title
    .toLowerCase()
    .replace(/[ ]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '');
  return result;
}
