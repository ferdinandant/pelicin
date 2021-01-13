import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';

import { getTopicKeyFromPath, TopicConfigProvider, TopicChaptersProvider } from '@pelicin/config';
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

  return (
    <HamburgerToggleProvider>
      <TopBar showHamburgerToggle />
      <MDXProvider components={components}>{children}</MDXProvider>
    </HamburgerToggleProvider>
  );
}

// ================================================================================
// HELPERS
// ================================================================================

function renderMDX(children: ReactNode) {
  const toc = getArticleTOC(children);
  const { pathname } = useRouter();
  const topicKey = getTopicKeyFromPath(pathname);
  const processedChildren = processArticleMDX(children);

  return (
    <>
      <TopicConfigProvider topicKey={topicKey}>
        <TopicChaptersProvider topicKey={topicKey}>
          <ArticleTOCProvider value={toc}>
            <div>
              <ChapterSidebar />
              <HamburgerChapterSidebar />
              <MainContainer>{processedChildren}</MainContainer>
            </div>
          </ArticleTOCProvider>
        </TopicChaptersProvider>
      </TopicConfigProvider>

      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  );
}
