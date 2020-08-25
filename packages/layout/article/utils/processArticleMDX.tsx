import React, { ReactNode } from 'react';

import { Heading } from 'article';
import { extractHashFromNode } from './extractHashFromNode';

/**
 * Process article MDX nodes (e.g. to swap them with other components, or add/remove nodes)
 * @param children
 */
export function processArticleMDX(children: ReactNode) {
  if (!Array.isArray(children)) {
    return processChild(children);
  }

  const result = children.map((child) => processChild(child));
  return result;
}

function processChild(child: ReactNode) {
  const { props } = child as React.Component<any, any>;
  const { mdxType, children } = props;

  // Map heading to include anchor hash
  if (mdxType.match(/h([1-6])/)) {
    const anchorHash = extractHashFromNode(children);
    return (
      <Heading heading={mdxType} anchor={anchorHash}>
        {children}
      </Heading>
    );
  }

  return child;
}
