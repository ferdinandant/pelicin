import React, { ReactNode } from 'react';

import { Heading } from '@pelicin/components';
import { extractHashFromNode } from '@pelicin/layout';

/**
 * Process article MDX nodes (e.g. to swap them with other components, or add/remove nodes)
 * @param children
 */
export default function processArticleMDX(children: ReactNode) {
  if (!Array.isArray(children)) {
    return processChild(children);
  }

  const result = children.map((child, index) => processChild(child, index));
  return result;
}

function processChild(child: ReactNode, index: number = 0) {
  const { props } = child as React.Component<any, any>;
  const { mdxType, children } = props;

  // Map heading to include anchor hash
  if (mdxType.match(/h([1-6])/)) {
    const anchorHash = extractHashFromNode(children);
    return (
      <Heading heading={mdxType} anchor={anchorHash} key={index}>
        {children}
      </Heading>
    );
  }

  return child;
}
