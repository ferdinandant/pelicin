import classNames from 'classnames';
import { useTopicConfig } from '@pelicin/config';
import { SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX, useHamburgerToggle } from '@pelicin/layout';

export default function TopBar() {
  const { mainColor, accentColor } = useTopicConfig();
  const {
    isToggled: isHamburgerToggled,
    setIsToggled: setIsHamburgerToggled,
  } = useHamburgerToggle();
  const hamburgerFillColor = isHamburgerToggled
    ? 'var(--color-dark-primary)'
    : 'var(--color-light-primary)';
  const segments = ['css'];

  function handleClickHamburger() {
    setIsHamburgerToggled(!isHamburgerToggled);
  }

  return (
    <>
      <header>
        <button
          className={classNames(['hamburgerToggle', { active: isHamburgerToggled }])}
          onClick={handleClickHamburger}
        >
          <svg viewBox="0 0 100 72" width="16" height="16">
            <rect y="0" width="100" height="12" rx="8" style={{ fill: hamburgerFillColor }} />
            <rect y="30" width="100" height="12" rx="8" style={{ fill: hamburgerFillColor }} />
            <rect y="60" width="100" height="12" rx="8" style={{ fill: hamburgerFillColor }} />
          </svg>
        </button>

        <nav>
          <a href="#">pelicin</a>
          {segments.map((segment, index) => (
            <span className="breadcrumbItem" key={index}>
              <span className="divider" />
              <a href="#">{segment}</a>
            </span>
          ))}
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

        /* Hamburger toggle */
        .hamburgerToggle {
          position: absolute;
          display: flex;
          margin-left: var(--spacing-m);
          padding: var(--spacing-s) var(--spacing-m);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--border-radius-normal);
          background-color: transparent;
          cursor: pointer;
        }
        .hamburgerToggle.active {
          background-color: var(--color-light-primary);
        }
        .hamburgerToggle:hover {
          border: 1px solid rgba(255, 255, 255, 0.6);
        }
        @media (max-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          .breadcrumbItem {
            display: none;
          }
        }
        @media (min-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          .hamburgerToggle {
            display: none;
          }
        }

        /* Breadcrumb */
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
