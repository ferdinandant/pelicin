import React, { useRef, useMemo, useCallback, useEffect } from 'react';

import { debounceEventHandler } from '@pelicin/utils';
import { ssChapterScrollPositionPrefix, useTopicConfig } from '@pelicin/config';
import { SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX, ChapterSidebarContent } from '@pelicin/layout';

export default function ChapterSidebar() {
  const { basePath } = useTopicConfig();
  const ssKey = `${ssChapterScrollPositionPrefix}-${basePath}`;
  const scrollElRef = useRef<HTMLDivElement>();

  const handleScroll = useCallback((e) => {
    const target = e.target as any;
    const scrollTop = target.scrollTop;
    const scrollLength = target.scrollHeight - target.clientHeight;
    const scrollRatio = scrollTop / scrollLength;
    sessionStorage.setItem(ssKey, String(scrollRatio));
  }, []);

  const debouncedHandleScroll = useMemo(() => {
    return debounceEventHandler(handleScroll, 100);
  }, []);

  useEffect(() => {
    const scrollRatio = sessionStorage.getItem(ssKey);
    const numScrollRatio = Number(scrollRatio);
    if (numScrollRatio && scrollElRef.current) {
      const scrollLength = scrollElRef.current.scrollHeight - scrollElRef.current.clientHeight;
      const scrollTop = numScrollRatio * scrollLength;
      scrollElRef.current.scrollTop = scrollTop;
    }
    return () => {
      debouncedHandleScroll.cancel();
    };
  }, []);

  return (
    <>
      <aside>
        <div ref={scrollElRef} onScroll={debouncedHandleScroll as any}>
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
