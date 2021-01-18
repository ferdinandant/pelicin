import React from 'react';
import { SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX, ChapterSidebarContent } from '@pelicin/layout';

export default function ChapterSidebar() {
  return (
    <>
      <aside>
        <div>
          <ChapterSidebarContent />
        </div>
      </aside>

      <style jsx>{`
        aside {
          flex: 0 0 var(--sidebar-width);
          background-color: var(--color-sidebar-bg);
        }
        aside > div {
          position: sticky;
          top: var(--header-height);
          height: calc(100vh - var(--header-height));
          overflow-y: auto;
        }

        @media (max-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX - 1}px) {
          aside {
            display: none;
          }
        }
        @media print {
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
