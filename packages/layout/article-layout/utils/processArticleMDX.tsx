import React, { ReactNode } from 'react';
import Head from 'next/head';

import { Heading, SyntaxHighlighter } from '@pelicin/components';
import { extractHashFromNode } from '@pelicin/layout';
import { extractStringFromNode } from '@pelicin/utils';
import { useTopicConfig } from '@pelicin/config';

/**
 * Process article MDX nodes (e.g. to swap them with other components, or add/remove nodes)
 * @param children - An <MDXContent> component
 */
export default function processArticleMDX(children: ReactNode) {
  const mdxChildren = (children as any).type().props.children;
  if (!Array.isArray(mdxChildren)) {
    return processChild(mdxChildren);
  }
  const result = mdxChildren.map((child, index) => processChild(child, index));
  return result;
}

function processChild(child: ReactNode, index = 0) {
  const { topicTitle } = useTopicConfig();

  if (!child) {
    return;
  }

  // HACK: Accessing some react internals here
  const { type, props } = child as any;
  if (!props) {
    return child;
  }
  const { children } = props;

  if (type === 'h1') {
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
        <Heading heading={type} anchor={anchorHash} key={index}>
          {children}
        </Heading>
      </React.Fragment>
    );
  } else if (type.match && type.match(/h([2-6])/)) {
    // Map heading to include anchor hash
    const anchorHash = extractHashFromNode(children);
    return (
      <Heading heading={type} anchor={anchorHash} key={index}>
        {children}
      </Heading>
    );
  } else if (type === 'pre') {
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
