import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useTopicConfig, useTopicChapters } from '@pelicin/config';

export default function ChapterSidebarContent() {
  const { pathname } = useRouter();
  const { mainColor } = useTopicConfig();
  const { topicChapters } = useTopicChapters();

  return (
    <>
      <nav>
        {topicChapters.map((chapterData, chapterIndex) => {
          if ('@separator' in chapterData) {
            return (
              <>
                <hr />
                <div className="dividerTitle">{chapterData['@separator']}</div>
              </>
            );
          }
          const { chapter, children } = chapterData;
          return (
            <div className="group" key={chapterIndex}>
              <span className="groupTitle">{chapter}</span>
              {children.map((titleData, titleIndex) => {
                const { title, path } = titleData;
                const isActive = pathname === path;
                return (
                  <Link key={titleIndex} href={path}>
                    <a className={classNames({ active: isActive })}>{title}</a>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <style jsx>{`
        nav {
          padding: var(--spacing-l);
        }
        .group {
          margin-top: var(--spacing-xl);
        }
        .group:first-child {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        hr {
          margin-top: var(--spacing-xxl);
          margin-bottom: var(--spacing-xxl);
          border-bottom: 1px solid var(--color-gray-2);
        }
        .dividerTitle {
          line-height: 1;
          font-size: var(--font-size-title-2);
          color: var(--color-gray-3);
        }

        .groupTitle {
          display: block;
          position: relative;
          font-size: var(--font-size-title-3);
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: var(--spacing-ms);
          color: var(--color-gray-7);
          line-height: 1.4;
        }
        a {
          display: block;
          position: relative;
          font-size: 15px;
          text-decoration: none;
          margin: var(--spacing-ms) 0;
          color: var(--color-gray-4);
          line-height: 1.4;
          padding: 0 var(--spacing-ms);
        }

        a:hover,
        a.active {
          color: ${mainColor};
        }
        a:hover {
          text-decoration: underline;
        }
        a.active {
          background-color: ${mainColor}22;
          padding: var(--spacing-xs) var(--spacing-ms);
          margin: calc(-1 * var(--spacing-xs)) 0;
          border-radius: var(--border-radius-normal);
        }
      `}</style>
    </>
  );
}
