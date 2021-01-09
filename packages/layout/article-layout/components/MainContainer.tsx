import React from 'react';
import { TOCSidebar, SHOW_TOC_SIDEBAR_BREAKPOINT_PX } from '@pelicin/layout';

type Props = {
  children: React.ReactNode;
};

export default function MainContainer(props: Props) {
  return (
    <>
      <main>
        <article>{props.children}</article>
        <div className="sectionSidebarContainer">
          <TOCSidebar />
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        article {
          padding: var(--spacing-xl) var(--spacing-xxl);
          max-width: 800px;
          flex: 0 1 800px;
          margin: 0 auto;
        }
        .sectionSidebarContainer {
          flex: 0 1 var(--toc-width);
        }
        @media (max-width: ${SHOW_TOC_SIDEBAR_BREAKPOINT_PX}px) {
          .sectionSidebarContainer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
