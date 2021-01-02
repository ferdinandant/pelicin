import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { debounce } from 'debounce';

import { useTopicConfig } from '@pelicin/topic';
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

const ANCHOR_VIEWED_TOP_THRESHOLD_PX = 10;

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
      `}</style>
    </>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function TOCSidebarContent() {
  const toc = useArticleTOC();
  const anchorHashes = getDisplayedTOCAnchorHashes(toc);
  const [onScreenAnchorHash, setOnScreenAnchorHash] = useState<string>(null);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  function handleScroll() {
    let newOnScreenAnchorHash = anchorHashes[0];
    // Find the last `anchorHash` which has not passed the "viewed" threshold
    for (const anchorHash of anchorHashes) {
      const element = window.document.getElementById(anchorHash);
      const rect = element.getBoundingClientRect();
      if (rect.top <= ANCHOR_VIEWED_TOP_THRESHOLD_PX) {
        newOnScreenAnchorHash = anchorHash;
      } else {
        break;
      }
    }
    setOnScreenAnchorHash(newOnScreenAnchorHash);
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
                  <TOCSidebarItem tocItem={tocItem} />
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </OnScreenAnchorHashProvider>

      <style jsx>{`
        nav {
          padding: 0 12px;
          padding-left: 0;
          font-size: 14px;
          color: #aaa;
          line-height: 1.4;
        }
        nav > ul {
          padding-top: 1px;
          padding-bottom: 1px;
          border-left: 1px solid #ccc;
          position: relative;
        }
      `}</style>
    </>
  );
}

function TOCSidebarItem(props: { tocItem: ArticleTOCItem; headerLevel?: number }) {
  const { tocItem, headerLevel = 1 } = props;
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
        <a href={'#' + hash} className={classNames({ active: isOnScreen })}>
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
                  <TOCSidebarItem tocItem={child} headerLevel={headerLevel + 1} />
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
          margin: 8px 0;
          color: #aaa;
          text-decoration: none;
          cursor: pointer;
        }
        a:hover {
          color: ${accentColor};
        }
        li a {
          padding-left: ${4 + headerLevel * 12}px;
        }
        a.active {
          color: ${accentColor};
        }
        a.active::before {
          content: '';
          height: 100%;
          left: -1px;
          position: absolute;
          border-left: 4px solid ${accentColor};
        }
      `}</style>
    </>
  );
}
