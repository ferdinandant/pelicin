import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';

import {
  getTopicConfigFromPath,
  TopicConfigProvider,
  TopicChaptersProvider,
} from '@pelicin/config';
import {
  TopBar,
  ArticleTOCProvider,
  ChapterSidebar,
  HamburgerToggleProvider,
  MainContainer,
  getArticleTOC,
  processArticleMDX,
} from '@pelicin/layout';

const HamburgerChapterSidebar = dynamic(() => import('./components/HamburgerChapterSidebar'), {
  ssr: false,
});

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  children: ReactNode;
};

const components = {
  wrapper: ({ children }) => {
    return renderMDX(children);
  },
};

// ================================================================================
// MAIN
// ================================================================================

export default function MDXArticleLayout(props: Props) {
  const { children } = props;
  const { pathname } = useRouter();
  const topicConfig = getTopicConfigFromPath(pathname);
  const { topicKey } = topicConfig;

  return (
    <TopicConfigProvider value={topicConfig}>
      <TopicChaptersProvider topicKey={topicKey}>
        <HamburgerToggleProvider>
          <TopBar showHamburgerToggle />
          <MDXProvider components={components}>{children}</MDXProvider>
        </HamburgerToggleProvider>
      </TopicChaptersProvider>
    </TopicConfigProvider>
  );
}

// ================================================================================
// HELPERS
// ================================================================================

function renderMDX(children: ReactNode) {
  const toc = getArticleTOC(children);
  const processedChildren = processArticleMDX(children);

  return (
    <>
      <ArticleTOCProvider value={toc}>
        <div>
          <ChapterSidebar />
          <HamburgerChapterSidebar />
          <MainContainer>{processedChildren}</MainContainer>
        </div>
      </ArticleTOCProvider>

      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  );
}
