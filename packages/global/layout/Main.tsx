import React from 'react';
import { SectionSidebar } from './SectionSidebar';

type Props = {
  children: React.ReactNode;
};

export function MainContainer(props: Props) {
  return (
    <>
      <main>
        <article>{props.children}</article>

        <aside>
          <div>
            <SectionSidebar />
          </div>
        </aside>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        article {
          padding: 24px;
          max-width: 800px;
          flex: 0 1 800px;
          margin: 0 auto;
        }

        aside {
          flex: 0 1 var(--sidebar-width);
        }
        aside > div {
          position: sticky;
          top: var(--header-height);
          height: calc(100vh - var(--header-height));
          overflow-y: auto;
        }

         {
          /* #toc-container {
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
        } */
        }
      `}</style>
    </>
  );
}
