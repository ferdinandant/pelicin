import { useTopicConfig } from 'global/topic';

export function SectionSidebar() {
  return (
    <>
      <aside>
        <SectionSidebarLinks />
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

function SectionSidebarLinks() {
  const { accentColor } = useTopicConfig();

  return (
    <>
      <nav>
        <ul>
          <li>
            <a>Lorem Ipsum Dolor</a>
          </li>
          <li>
            <a>Pikalo pikalo pikalo</a>
          </li>
          <li>
            <a className="active">Saya Suka susunya hingga tetes terakhir Saya suka coklatnya</a>
          </li>
          <li>
            <a>Kenapa suka yang begitu?</a>
            <ul>
              <li>
                <a>Karena ini?</a>
              </li>
              <li>
                <a>Karena itu?</a>
              </li>
              <li>
                <a>Karena ini dan itu?</a>
                <ul>
                  <li>
                    <a>Waw!!</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>Asdfghjkl</a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          padding: 0 12px;
          padding-left: 0;
          font-size: 14px;
          color: #aaa;
          line-height: 1.5;
        }
        nav > ul {
          padding-top: 1px;
          padding-bottom: 1px;
          border-left: 1px solid #ccc;
          position: relative;
        }

        a {
          cursor: pointer;
          position: relative;
          margin: 8px 0;
          display: block;
        }
        li a {
          padding-left: 16px;
        }
        li li a {
          padding-left: 32px;
        }
        li li li a {
          padding-left: 48px;
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
