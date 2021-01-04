import { useTopicConfig } from '@pelicin/config';

export default function TopBar() {
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
          height: var(--header-height);
          display: flex;
          align-items: center;
          color: var(--color-light-primary);
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
          font-size: var(--font-size-title-3);
          text-align: center;
        }
        nav a {
          padding: var(--spacing-xs) var(--spacing-ms);
          color: inherit;
          text-decoration: none;
          display: inline-block;
        }
        nav a:hover {
          background: rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius-rounded);
        }
        nav .divider:after {
          font-weight: normal;
          padding-left: var(--spacing-xs);
          padding-right: var(--spacing-xs);
          opacity: 0.5;
          font-size: 22px;
          content: '/';
        }
      `}</style>
    </>
  );
}
