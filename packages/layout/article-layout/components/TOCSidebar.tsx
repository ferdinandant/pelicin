import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { debounce } from 'debounce';

import { useTopicConfig } from '@pelicin/topic';
import {
  ArticleTOC,
  ArticleTOCItem,
  useArticleTOC,
  OnScreenAnchorHashProvider,
  useOnScreenAnchorHash,
  getTOCAnchorHashes,
} from '@pelicin/layout';

// ================================================================================
// MAIN
// ================================================================================

export default function TOCSidebar() {
  const toc = useArticleTOC();
  const anchorHashes = getTOCAnchorHashes(toc);
  const [aaa, setOnScreenAnchorHash] = useState<string>('papakakaka');

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  function handleScroll() {
    const newOnScreenAnchorHash = anchorHashes.find((anchorHash) => {
      const element = window.document.getElementById(anchorHash);
      const rect = element.getBoundingClientRect();
      return rect.top >= -10;
    });
    console.log('SCROLL!!!', newOnScreenAnchorHash);
    setOnScreenAnchorHash(newOnScreenAnchorHash);
  }

  console.log(aaa);

  return (
    <>
      <OnScreenAnchorHashProvider value={'ASDASDASD'}>
        <aside>{renderTOC(toc)}</aside>
      </OnScreenAnchorHashProvider>

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
// HELPERS
// ================================================================================

function renderTOC(toc: ArticleTOC) {
  return (
    <>
      <nav>
        <ul>
          {toc.map((tocItem, index) => {
            const { hash } = tocItem;
            const key = `${index}-${hash}`;
            return <React.Fragment key={key}>{renderTOCItem(tocItem)}</React.Fragment>;
          })}
        </ul>
      </nav>

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

function renderTOCItem(tocItem: ArticleTOCItem, headerLevel = 1) {
  const { accentColor } = useTopicConfig();
  const onScreenAnchorHash = useOnScreenAnchorHash();
  const { hash, titleNode, children } = tocItem;
  const isOnScreen = hash === onScreenAnchorHash;
  console.log('onScreenAnchorHash', onScreenAnchorHash);

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
                <React.Fragment key={key}>{renderTOCItem(child, headerLevel + 1)}</React.Fragment>
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
          border-left: 3px solid ${accentColor};
        }
      `}</style>
    </>
  );
}
