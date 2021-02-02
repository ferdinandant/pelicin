import React from 'react';
import {
  Breadcrumb,
  TOCSidebar,
  SlidingTOCSidebar,
  SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX,
  SHOW_TOC_SIDEBAR_BREAKPOINT_PX,
  REDUCE_PADDING_BREAKPOINT_PX,
} from '@pelicin/layout';

type Props = {
  children: React.ReactNode;
};

export default function MainContainer(props: Props) {
  return (
    <>
      <main>
        <div className="breadcrumbContainer">
          <Breadcrumb />
        </div>
        <div className="contentContainer">
          <article>{props.children}</article>
          <div className="sectionSidebarContainer">
            <TOCSidebar />
          </div>
        </div>
        <div>
          <SlidingTOCSidebar />
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          overflow: auto;
        }
        .breadcrumbContainer {
          display: none;
        }
        .contentContainer {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        article {
          box-shadow: 0 0 var(--spacing-xxl) var(--color-gray-1);
          padding: var(--spacing-xl) var(--spacing-xxl);
          width: 100%;
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
        @media (max-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          article {
            box-shadow: none;
          }
          .breadcrumbContainer {
            display: block;
            padding: var(--spacing-xl) var(--spacing-xxl);
            padding-bottom: 0;
            margin-bottom: calc(-1.25 * var(--spacing-l));
            position: relative;
            z-index: 2;
          }
        }
        @media (max-width: ${REDUCE_PADDING_BREAKPOINT_PX}px) {
          article {
            padding: var(--spacing-m) var(--spacing-l);
          }
          .breadcrumbContainer {
            padding: var(--spacing-m) var(--spacing-l);
            padding-bottom: var(--spacing-ms);
          }
        }
      `}</style>
    </>
  );
}
