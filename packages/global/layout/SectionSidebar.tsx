import { useTopicConfig } from 'global/topic';

export function SectionSidebar() {
  const { accentColor } = useTopicConfig();

  return (
    <>
      <aside>
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
            <a>
              1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad earum ex magnam,
              animi, numquam eaque nesciunt placeat reprehenderit dolores aspernatur saepe sint iste
              beatae? Harum blanditiis sapiente maxime voluptates incidunt?
            </a>
          </li>
          <li>
            <a>
              2 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad earum ex magnam,
              animi, numquam eaque nesciunt placeat reprehenderit dolores aspernatur saepe sint iste
              beatae? Harum blanditiis sapiente maxime voluptates incidunt?
            </a>
          </li>
          <li>
            <a>
              3 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad earum ex magnam,
              animi, numquam eaque nesciunt placeat reprehenderit dolores aspernatur saepe sint iste
              beatae? Harum blanditiis sapiente maxime voluptates incidunt?
            </a>
          </li>
          <li>
            <a>Asdfghjkl</a>
          </li>
        </ul>
      </aside>

      <style jsx>{`
        aside {
          font-size: 14px;
          color: #aaa;
          padding: 12px;
          padding-top: 24px;
          padding-left: 0;
          line-height: 1.5;
        }
        aside > ul {
          padding-top: 1px;
          padding-bottom: 1px;
          border-left: 1px solid #ccc;
          position: relative;
        }
        aside > ul > li > a {
          font-weight: bold;
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
          border-left: 2px solid ${accentColor};
        }
      `}</style>
    </>
  );
}
