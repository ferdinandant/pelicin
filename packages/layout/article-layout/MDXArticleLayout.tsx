import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

import {
  TopBar,
  ArticleTOCProvider,
  ChapterSidebar,
  HamburgerChapterSidebar,
  MainContainer,
  getArticleTOC,
  processArticleMDX,
} from '@pelicin/layout';

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
    <>
      <TopBar />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
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
