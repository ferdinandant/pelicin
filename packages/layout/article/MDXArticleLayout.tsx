import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Header } from '../global/Header';
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
      <div>
        <ChapterSidebar />
        <MainContainer>{children}</MainContainer>
      </div>

      <style jsx>{`
        div {
          display: flex;
        }
      `}</style>
    </>
  );
}
