import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useTopicConfig } from '@pelicin/config';

export default function ChapterSidebarContent() {
  const { pathname } = useRouter();
  const { mainColor, chapters } = useTopicConfig();

  return (
    <>
      <nav>
        {chapters.map((chapterData, chapterIndex) => {
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

        .groupTitle {
          display: block;
          position: relative;
          font-size: var(--font-size-title-3);
          font-weight: bold;
          line-height: 1.2;
          margin-bottom: var(--spacing-ms);
          color: ${mainColor};
          line-height: 1.4;
          opacity: 0.9;
        }
        a {
          display: block;
          position: relative;
          font-size: 15px;
          text-decoration: none;
          margin: var(--spacing-ms) 0;
          color: var(--color-dark-secondary);
          opacity: 0.9;
          line-height: 1.4;
        }

        a.active,
        a:hover {
          opacity: 1;
          color: ${mainColor};
        }

        span.groupTitle::before {
          content: '';
          position: absolute;
          height: 100%;
          left: calc(var(--spacing-l) * -1);
          border-left: 12px solid ${mainColor};
        }
      `}</style>
    </>
  );
}
