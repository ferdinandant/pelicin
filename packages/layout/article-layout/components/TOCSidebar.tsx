import React from 'react';
import { TOCSidebarContent } from '@pelicin/layout';

export default function TOCSidebar() {
  return (
    <>
      <aside>
        <TOCSidebarContent />
      </aside>

      <style jsx>{`
        aside {
          position: fixed;
          box-sizing: content-box;
          top: calc(var(--header-height) + 24px);
          height: calc(100vh - var(--header-height) - 48px);
          margin-right: 12px;
          overflow-y: auto;
          width: calc(var(--toc-width) - var(--spacing-m));
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
