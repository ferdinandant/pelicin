import { useTopicConfig } from 'global/topic';

export function Header() {
  // `languageColorHex` is picked from https://github.com/ozh/github-colors
  // `accentColorHex` is picked from https://mycolor.space/?hex=%23563D7C&sub=1
  const { mainColor, accentColor } = useTopicConfig();

  return (
    <>
      <header>
        <nav>
          <a href="#">pelicin</a>
          <span className="divider"></span>
          <a href="#">css</a>
        </nav>
      </header>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          height: 48px;
          display: flex;
          align-items: center;
          color: white;
          background-image: url('/shattered.png'),
            linear-gradient(45deg, ${mainColor}, ${accentColor});
          background-blend-mode: color-burn;
          z-index: 999;
        }
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-weight: bold;
          font-size: 18px;
          text-align: center;
        }
        nav a {
          padding: 4px 10px;
          color: inherit;
          text-decoration: none;
          display: inline-block;
        }
        nav a:hover {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 100px;
        }
        nav .divider:after {
          font-weight: normal;
          padding-left: 5px;
          padding-right: 5px;
          opacity: 0.5;
          font-size: 22px;
          content: '/';
        }
      `}</style>
    </>
  );
}
