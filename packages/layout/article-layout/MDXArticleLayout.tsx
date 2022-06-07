import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';

import {
  getTopicConfigFromPath,
  TopicConfigProvider,
  TopicChaptersProvider,
  useTopicConfig,
} from '@pelicin/config';
import {
  TopBar,
  ArticleTOCProvider,
  ChapterSidebar,
  HamburgerToggleProvider,
  TOCToggleProvider,
  MainContainer,
  getArticleTOC,
  extractHashFromNode,
} from '@pelicin/layout';
import { Heading, SyntaxHighlighter } from '@pelicin/components';
import { extractStringFromNode } from '@pelicin/utils';

const HamburgerChapterSidebar = dynamic(() => import('./components/HamburgerChapterSidebar'), {
  ssr: false,
}) as any;

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  children: ReactNode;
};

const componentMap = {
  h1: (props) => <TitleHeader {...props} />,
  h2: (props) => <ContentHeader heading="h2" {...props} />,
  h3: (props) => <ContentHeader heading="h3" {...props} />,
  h4: (props) => <ContentHeader heading="h4" {...props} />,
  h5: (props) => <ContentHeader heading="h5" {...props} />,
  h6: (props) => <ContentHeader heading="h6" {...props} />,
  pre: (props) => <PreformattedBlock {...props} />,
};

// ================================================================================
// MAIN
// ================================================================================

export default function MDXArticleLayout(props: Props) {
  const { children } = props;
  const { pathname } = useRouter();

  // Topic
  const topicConfig = getTopicConfigFromPath(pathname);
  const { topicKey } = topicConfig;

  // TOC
  // Currently hot reloading does not work after we upgrade to @mdx-js v2
  // Might want to investigate later; but current;y it's not blocking
  const toc = getArticleTOC(children);

  return (
    <TopicConfigProvider value={topicConfig}>
      <TopicChaptersProvider topicKey={topicKey}>
        <HamburgerToggleProvider>
          <TOCToggleProvider>
            <TopBar showHamburgerToggle showTOCToggle />
            <ArticleTOCProvider value={toc}>
              <div>
                <ChapterSidebar />
                <HamburgerChapterSidebar />
                <MainContainer>
                  <MDXProvider components={componentMap}>{children as any}</MDXProvider>
                </MainContainer>
              </div>
            </ArticleTOCProvider>
            <style jsx>{`
              div {
                display: flex;
              }
            `}</style>
          </TOCToggleProvider>
        </HamburgerToggleProvider>
      </TopicChaptersProvider>
    </TopicConfigProvider>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function TitleHeader(props) {
  const { children } = props;
  const { topicTitle } = useTopicConfig();
  const anchorHash = extractHashFromNode(children);
  const titleString = extractStringFromNode(children);
  const siteTopicString = topicTitle ? `Pelicin / ${topicTitle}` : 'Pelicin';
  return (
    <React.Fragment>
      <Head key="title">
        <title>
          {titleString} - {siteTopicString}
        </title>
      </Head>
      <Heading heading="h1" anchor={anchorHash}>
        {children}
      </Heading>
    </React.Fragment>
  );
}

function ContentHeader(props) {
  const { children, heading } = props;
  const anchorHash = extractHashFromNode(children);
  return (
    <Heading heading={heading} anchor={anchorHash}>
      {children}
    </Heading>
  );
}

function PreformattedBlock(props) {
  const { children } = props;
  const { props: childrenProps } = children as any;
  const { className, children: codeString } = childrenProps || {};
  if (className && className.startsWith('language-')) {
    const language = className.replace('language-', '');
    return <SyntaxHighlighter language={language}>{codeString}</SyntaxHighlighter>;
  }
  return children;
}
