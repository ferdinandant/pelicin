import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useTopicConfig } from '@pelicin/config';

// ================================================================================
// MAIN
// ================================================================================

export default function ChapterSidebar() {
  return (
    <>
      <aside>
        <div>
          <SidebarContent />
        </div>
      </aside>

      <style jsx>{`
        aside {
          flex: 0 0 var(--sidebar-width);
          background-color: #fafafa;
        }
        aside > div {
          position: sticky;
          top: var(--header-height);
          height: calc(100vh - var(--header-height));
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function SidebarContent() {
  const { pathname } = useRouter();
  const { mainColor, chapters } = useTopicConfig();

  return (
    <>
      <nav>
        {chapters.map((chapterData, chapterIndex) => {
          const { chapter, children } = chapterData;
          return (
            <div className="group" key={chapterIndex}>
              <h1>{chapter}</h1>
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
          padding: 24px;
          line-height: 1.4;
        }
        .group {
          margin-top: 28px;
        }
        .group:first-child {
          margin-top: 0;
        }

        h1 {
          font-size: 18px;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        a {
          display: block;
          position: relative;
          font-size: 15px;
          text-decoration: none;
          margin: 8px 0;
          margin-left: 18px;
          color: #999;
        }

        a.active,
        a:hover {
          color: ${mainColor};
        }
        a.active::before,
        a:hover::before {
          content: '';
          position: absolute;
          height: 100%;
          left: -16px;
          border-left: 6px solid ${mainColor};
        }
        a.active::before,
        a.active:hover::before {
          opacity: 0.8;
        }
        a:hover::before {
          opacity: 0.3;
        }
      `}</style>
    </>
  );
}
