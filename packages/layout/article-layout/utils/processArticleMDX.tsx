import React, { ReactNode } from 'react';

import { Heading, SyntaxHighlighter } from '@pelicin/components';
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

  if (mdxType.match(/h([1-6])/)) {
    // Map heading to include anchor hash
    const anchorHash = extractHashFromNode(children);
    return (
      <Heading heading={mdxType} anchor={anchorHash} key={index}>
        {children}
      </Heading>
    );
  } else if (mdxType === 'pre') {
    // Map '<pre>' to use syntax highlighter
    const { props: childrenProps } = children as any;
    const { className, children: codeString } = childrenProps || {};
    if (className && className.startsWith('language-')) {
      const language = className.replace('language-', '');
      return <SyntaxHighlighter language={language}>{codeString}</SyntaxHighlighter>;
    }
  }

  return child;
}
