import { ArticleTOC } from '@pelicin/layout';

/**
 * Get all anchor hashes in `toc` (those for `<a id="ANCHOR">`),
 * returns a flat array of anchor hashes.
 * @param toc
 */
export default function getTOCAnchorHashes(toc: ArticleTOC) {
  const result = [];

  for (const item of toc) {
    const { hash, children } = item;
    result.push(hash);
    result.push(...getTOCAnchorHashes(children));
  }
  return result;
}
