import React, { ReactNode } from 'react';

import { ArticleTOC } from '../types';
import { extractHashFromNode } from './extractHashFromNode';

/**
 * Given mdxChildren, generate table of contents of the article
 * @param children
 */
export function getArticleTOC(children: ReactNode): ArticleTOC {
  if (!children) return [];

  const toc = [];

  for (const child of children) {
    const { props } = child as React.Component<any, any>;
    const { mdxType, children } = props;

    const match = mdxType.match(/h([1-6])/);
    if (match) {
      const headingLevel = Number(match[1]);

      if (headingLevel === 1) {
        toc.push({
          titleNode: children,
          hash: extractHashFromNode(children),
          children: [],
        });
      } else {
        // Traverse parent headings
        let parentTOCItemChildren = toc;
        for (let level = 1; level < headingLevel; level++) {
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
