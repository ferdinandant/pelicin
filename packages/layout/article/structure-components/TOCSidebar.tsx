import React from 'react';

import { useTopicConfig } from 'topic';
import { useArticleTOC } from '../contexts/ArticleTOCContext';
import { ArticleTOC, ArticleTOCItem } from '../types';

export function TOCSidebar() {
  const toc = useArticleTOC();

  return (
    <>
      <aside>{renderTOC(toc)}</aside>

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
  if (headerLevel > 3) {
    return null;
  }

  const { accentColor } = useTopicConfig();
  const { hash, titleNode, children } = tocItem;

  return (
    <>
      <li>
        <a>{titleNode}</a>
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
          cursor: pointer;
          position: relative;
          margin: 8px 0;
          display: block;
        }
        li a {
          padding-left: ${headerLevel * 16}px;
        }
        a.active {
          color: ${accentColor};
          font-weight: bold;
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
