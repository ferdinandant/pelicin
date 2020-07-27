import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { Header } from '../components/Header';
import { ChapterSidebar } from '../components/ChapterSidebar';
import { MainContainer } from '../components/MainContainer';

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
