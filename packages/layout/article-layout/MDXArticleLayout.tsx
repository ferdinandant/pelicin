import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

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
  TOCToggleProvider,
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

// ================================================================================
// MAIN
// ================================================================================

export default function MDXArticleLayout(props: Props) {
  const { children } = props;
  const { pathname } = useRouter();
  const topicConfig = getTopicConfigFromPath(pathname);
  const { topicKey } = topicConfig;

  const toc = getArticleTOC(children);
  const processedChildren = processArticleMDX(children);

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
                <MainContainer>{processedChildren}</MainContainer>
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
