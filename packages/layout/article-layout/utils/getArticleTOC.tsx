import React, { ReactNode } from 'react';
import { ArticleTOC, extractHashFromNode } from '@pelicin/layout';

/**
 * Given mdxChildren, generate table of contents of the article
 * @param children - An <MDXContent> component
 */
export default function getArticleTOC(children: ReactNode): ArticleTOC {
  const mdxChildren = (children as any).type().props.children;
  if (!mdxChildren) {
    return [];
  }
  if (!Array.isArray(mdxChildren)) {
    return [];
  }

  const toc = [];
  for (const child of mdxChildren) {
    // HACK: Accessing some react internals here
    const { type, props } = child as any;
    if (!props || typeof type !== 'string') {
      continue;
    }

    const { children } = props;
    const match = type.match(/h([1-6])/);
    if (match) {
      const headingLevel = Number(match[1]);

      if (headingLevel === 1) {
        // Don't put main title in TOC
        continue;
      } else if (headingLevel === 2) {
        toc.push({
          titleNode: children,
          hash: extractHashFromNode(children),
          children: [],
        });
      } else {
        // Traverse parent headings
        let parentTOCItemChildren = toc;
        for (let level = 2; level < headingLevel; level++) {
          const isChildrenEmpty = parentTOCItemChildren.length === 0;
          const hasNextIteration = level + 1 < headingLevel;
          if (isChildrenEmpty && hasNextIteration) {
            parentTOCItemChildren.push({ titleNode: null, hash: '', children: [] });
          }
          parentTOCItemChildren = parentTOCItemChildren[parentTOCItemChildren.length - 1].children;
        }
        // Add new children to parent node
        parentTOCItemChildren.push({
          titleNode: children,
          hash: extractHashFromNode(children),
          children: [],
        });
      }
    }
  }

  return toc;
}
