import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { debounce } from 'debounce';

import { useTopicConfig } from '@pelicin/config';
import {
  ArticleTOCItem,
  useArticleTOC,
  OnScreenAnchorHashProvider,
  useOnScreenAnchorHash,
  getDisplayedTOCAnchorHashes,
} from '@pelicin/layout';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TOCSidebarItemProps = {
  tocItem: ArticleTOCItem;
  headerLevel?: number;
  onClickSidebarItem: (anchorHash: string) => void;
};

const ANCHOR_VIEWED_TOP_THRESHOLD_PX = 100;

const SCROLL_EVENT_COOLDOWN_MS = 50;

// ================================================================================
// MAIN
// ================================================================================

export default function TOCSidebar() {
  return (
    <>
      <aside>
        <TOCSidebarContent />
      </aside>

      <style jsx>{`
        aside {
          position: sticky;
          box-sizing: content-box;
          top: calc(var(--header-height) + 24px);
          height: calc(100vh - var(--header-height) - 48px);
          margin-right: 12px;
          overflow-y: auto;
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

// ================================================================================
// CHILDREN
// ================================================================================

function TOCSidebarContent() {
  const toc = useArticleTOC();
  const { accentColor } = useTopicConfig();
  const anchorHashes = getDisplayedTOCAnchorHashes(toc);

  const [onScreenAnchorHash, setOnScreenAnchorHash] = useState<string>(null);
  const lastClickSidebarItemTsRef = useRef<number>(Date.now() - 1000);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, SCROLL_EVENT_COOLDOWN_MS);
    // Initialize `onScreenAnchorHash` value on load
    handleScroll();
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  function handleScroll() {
    const currentTs = Date.now();
    const lastClickSidebarItemTs = lastClickSidebarItemTsRef.current;
    let newOnScreenAnchorHash = anchorHashes[0];
    // Do not consider scroll event when user just clicked on sidebar item
    // (Prevent the highlighted item to be directly overwritten by the scroll event)
    // We set 2 * cooldown to give ample amount of time after debounce.
    if (currentTs - lastClickSidebarItemTs < 2 * SCROLL_EVENT_COOLDOWN_MS) {
      return;
    }
    // Find the last `anchorHash` which has not passed the "viewed" threshold
    for (const anchorHash of anchorHashes) {
      const element = window.document.getElementById(anchorHash);
      const rect = element && element.getBoundingClientRect();
      if (!element) {
        continue;
      }
      if (rect.top <= ANCHOR_VIEWED_TOP_THRESHOLD_PX) {
        newOnScreenAnchorHash = anchorHash;
      } else {
        break;
      }
    }
    setOnScreenAnchorHash(newOnScreenAnchorHash);
  }

  function handleClickSidebarItem(anchorHash) {
    lastClickSidebarItemTsRef.current = Date.now();
    setOnScreenAnchorHash(anchorHash);
  }

  return (
    <>
      <OnScreenAnchorHashProvider value={onScreenAnchorHash}>
        <nav>
          <ul>
            {toc.map((tocItem, index) => {
              const { hash } = tocItem;
              const key = `${index}-${hash}`;
              return (
                <React.Fragment key={key}>
                  <TOCSidebarItem tocItem={tocItem} onClickSidebarItem={handleClickSidebarItem} />
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </OnScreenAnchorHashProvider>

      <style jsx>{`
        nav {
          padding: 0 var(--spacing-ms);
          padding-left: 0;
          font-size: var(--font-size-tiny);
          line-height: 1.4;
        }
        nav > ul {
          padding-top: 1px;
          padding-bottom: 1px;
          border-left: 1px solid ${accentColor}55;
          list-style-type: none;
          position: relative;
        }
      `}</style>
    </>
  );
}

function TOCSidebarItem(props: TOCSidebarItemProps) {
  const { tocItem, headerLevel = 1, onClickSidebarItem } = props;
  const { accentColor } = useTopicConfig();
  const onScreenAnchorHash = useOnScreenAnchorHash();
  const { hash, titleNode, children } = tocItem;
  const isOnScreen = hash === onScreenAnchorHash;

  if (headerLevel > 3) {
    return null;
  }
  return (
    <>
      <li>
        {/* Current TOC node */}
        <a
          href={'#' + hash}
          onClick={() => onClickSidebarItem(hash)}
          className={classNames({ active: isOnScreen })}
        >
          {titleNode}
        </a>
        {/* Children TOC node */}
        {children.length > 0 && (
          <ul>
            {children.map((child, index) => {
              const { hash } = child;
              const key = `${index}-${hash}`;
              return (
                <React.Fragment key={key}>
                  <TOCSidebarItem
                    tocItem={child}
                    headerLevel={headerLevel + 1}
                    onClickSidebarItem={onClickSidebarItem}
                  />
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </li>

      <style jsx>{`
        a {
          display: block;
          position: relative;
          margin: var(--spacing-s) 0;
          color: var(--color-gray-9);
          text-decoration: none;
          cursor: pointer;
          opacity: 0.4;
        }
        a:hover {
          color: ${accentColor};
          opacity: 1;
        }
        ul {
          list-style-type: none;
          margin: var(--spacing-s) 0;
        }
        li {
          margin-left: 0;
          padding-left: 0;
          margin: var(--spacing-s) 0;
        }
        li a {
          padding-left: ${4 + headerLevel * 12}px;
        }
        a.active {
          color: ${accentColor};
          opacity: 1;
        }
        a.active::before {
          content: '';
          height: 100%;
          left: -1px;
          position: absolute;
          border-left: 6px solid ${accentColor};
        }
      `}</style>
    </>
  );
}
