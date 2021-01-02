import { ArticleTOC, TOC_MAX_LEVEL } from '@pelicin/layout';

/**
 * Get all anchor hashes in `toc` (those for `<a id="ANCHOR">`),
 * returns a flat array of anchor hashes.
 * @param toc
 */
export default function getTOCAnchorHashes(toc: ArticleTOC) {
  return getDisplayedTOCAnchorHashesInternal(toc, TOC_MAX_LEVEL);
}

function getDisplayedTOCAnchorHashesInternal(toc: ArticleTOC, maxLevel: number) {
  const result = [];

  if (maxLevel <= 0) {
    return [];
  }

  for (const item of toc) {
    const { hash, children } = item;
    result.push(hash);
    result.push(...getDisplayedTOCAnchorHashesInternal(children, maxLevel - 1));
  }
  return result;
}
