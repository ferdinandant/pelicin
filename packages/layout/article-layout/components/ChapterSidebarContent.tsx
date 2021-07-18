import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useTopicConfig, useTopicChapters } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type BadgeProps = {
  isActive: boolean;
  text: string;
};

// ================================================================================
// MAIN
// ================================================================================

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
              <React.Fragment key={chapterIndex}>
                <hr />
                <div className="dividerTitle">{chapterData['@separator']}</div>
              </React.Fragment>
            );
          }
          const { chapter, children } = chapterData;
          return (
            <div className="group" key={chapterIndex}>
              <span className="groupTitle">{chapter}</span>
              {children.map((titleData, titleIndex) => {
                const { title, path, badge } = titleData;
                const isActive = pathname === path;
                return (
                  <Link key={titleIndex} href={path}>
                    <a className={classNames({ active: isActive })}>
                      <span className="title">{title}</span>
                      {badge && <Badge isActive={isActive} text={badge} />}
                    </a>
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
        a:hover .title {
          text-decoration: underline;
        }
        a.active {
          background-color: ${mainColor}22;
          padding: var(--spacing-xs) var(--spacing-ms);
          margin: calc(-1 * var(--spacing-xs)) 0;
          border-radius: var(--border-radius-normal);
        }

        .badge {
          display: inline-block;
          position: relative;
          top: -1px;
          padding: var(--spacing-xxs) var(--spacing-s);
          border-radius: var(--border-radius-rounded);
          font-size: var(--font-size-tiny);
          background-color: var(--color-gray-1);
          color: var(--color-gray-3);
        }
        a.active .badge {
          background-color: ${mainColor}17;
          color: ${mainColor};
        }
      `}</style>
    </>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function Badge(props: BadgeProps) {
  const { isActive, text } = props;
  const { mainColor } = useTopicConfig();

  return (
    <>
      {' '}
      <span className="badge" />
      <style jsx>{`
        .badge {
          display: inline-block;
          position: relative;
          top: -1px;
          padding: var(--spacing-xxs) var(--spacing-s);
          border-radius: var(--border-radius-rounded);
          font-size: var(--font-size-tiny);
          background-color: ${isActive ? `${mainColor}17` : 'var(--color-gray-1)'};
          color: ${isActive ? `${mainColor}` : 'var(--color-gray-3)'};
        }
        .badge::before {
          content: '${text}';
        }
      `}</style>
    </>
  );
}
