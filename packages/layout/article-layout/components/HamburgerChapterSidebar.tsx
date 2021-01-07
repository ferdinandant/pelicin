import React from 'react';
import ReactDOM from 'react-dom';
import { SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX, ChapterSidebarContent } from '@pelicin/layout';

export default function HamburgerChapterSidebar() {
  if (typeof window === 'undefined') {
    return null;
  }
  return <PortalizedSidebarContent />;
}

function PortalizedSidebarContent() {
  const component = (
    <>
      <aside id="PAKA">
        <div>
          <ChapterSidebarContent />
        </div>
      </aside>

      <style jsx>{`
        aside {
          position: fixed;
          top: var(--header-height);
          width: calc(100vw + var(--sidebar-width));
          left: 0);
          background-color: rgba(0, 0, 0, 0.6);
        }
        aside > div {
          position: sticky;
          top: var(--header-height);
          width: var(--sidebar-width);
          height: calc(100vh - var(--header-height));
          background-color: var(--color-light-stain);
          overflow-y: auto;
        }

        @media (min-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  );
  return ReactDOM.createPortal(component, document.body);
}
