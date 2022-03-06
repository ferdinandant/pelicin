import React, { ReactNode } from 'react';
import Head from 'next/head';

import { Heading, SyntaxHighlighter } from '@pelicin/components';
import { extractHashFromNode } from '@pelicin/layout';
import { extractStringFromNode } from '@pelicin/utils';
import { useTopicConfig } from '@pelicin/config';

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

function processChild(child: ReactNode, index = 0) {
  const { topicTitle } = useTopicConfig();

  if (!child) {
    return;
  }

  const { props } = child as React.Component<any, any>;
  if (!props) {
    return child;
  }
  const { mdxType, children } = props;

  if (mdxType === 'h1') {
    // Map heading to include anchor hash
    const anchorHash = extractHashFromNode(children);
    const titleString = extractStringFromNode(children);
    const siteTopicString = topicTitle ? `Pelicin / ${topicTitle}` : 'Pelicin';
    return (
      <React.Fragment key={index}>
        <Head key="title">
          <title>
            {titleString} - {siteTopicString}
          </title>
        </Head>
        <Heading heading={mdxType} anchor={anchorHash} key={index}>
          {children}
        </Heading>
      </React.Fragment>
    );
  } else if (mdxType.match(/h([2-6])/)) {
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
      return (
        <SyntaxHighlighter key={index} language={language}>
          {codeString}
        </SyntaxHighlighter>
      );
    }
  }

  return child;
}
