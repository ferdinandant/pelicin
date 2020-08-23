import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Header } from '../global/Header';
import { ArticleTOCProvider } from './contexts/ArticleTOCContext';
import { ChapterSidebar } from './structure-components/ChapterSidebar';
import { MainContainer } from './structure-components/MainContainer';
import { getArticleTOC } from './utils/getArticleTOC';

type Props = {
  children: ReactNode;
};

const components = {
  wrapper: ({ children }) => {
    return renderMDX(children);
  },
};

export function MDXArticleLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <MDXProvider components={components}>{children}</MDXProvider>
    </>
  );
}

function renderMDX(children: ReactNode) {
  const toc = getArticleTOC(children);
  console.log('toc', toc);

  return (
    <>
      <ArticleTOCProvider value={toc}>
        <div>
          <ChapterSidebar />
          <MainContainer>{children}</MainContainer>
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
