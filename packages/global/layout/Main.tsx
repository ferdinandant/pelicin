import React from 'react';
import { SectionSidebar } from './SectionSidebar';

type Props = {
  children: React.ReactNode;
};

export function MainContainer(props: Props) {
  return (
    <>
      <main>
        <article id="article">{props.children}</article>

        <div id="toc-container">
          <SectionSidebar />
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
          margin: 0 var(--sidebar-width);
        }
        article {
          padding: 24px;
          max-width: 800px;
          margin: 0 auto;
        }

        #toc-container {
          position: fixed;
          right: 0px;
          overflow-y: auto;
          height: calc(100% - var(--header-height));
          width: var(--sidebar-width);
        }

        @media (max-width: 1365px) {
          main {
            margin-right: 0;
          }
          #toc-container {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
