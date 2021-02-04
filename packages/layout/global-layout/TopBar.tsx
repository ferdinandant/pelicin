import React, { useMemo } from 'react';
import classNames from 'classnames';

import { useTopicConfig } from '@pelicin/config';
import {
  SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX,
  SHOW_TOC_SIDEBAR_BREAKPOINT_PX,
  useHamburgerToggle,
  useTOCToggle,
  getBreadcrumbSegments,
} from '@pelicin/layout';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  showHamburgerToggle?: boolean;
  showTOCToggle?: boolean;
};

// ================================================================================
// MAIN
// ================================================================================

export default function TopBar(props: Props) {
  const { showHamburgerToggle, showTOCToggle } = props;
  const { basePath, mainColor, accentColor, topicTitle } = useTopicConfig();
  const { isToggled: isTOCToggled, setIsToggled: setIsTOCToggled } = useTOCToggle();
  const {
    isToggled: isHamburgerToggled,
    setIsToggled: setIsHamburgerToggled,
  } = useHamburgerToggle();

  const segments = useMemo(() => {
    return getBreadcrumbSegments({ basePath, topicTitle });
  }, [basePath, topicTitle]);

  function handleClickHamburger() {
    setIsHamburgerToggled(!isHamburgerToggled);
  }

  function handleClickTOCToggle() {
    setIsTOCToggled(!isTOCToggled);
  }

  const hamburgerFillColor = isHamburgerToggled ? 'var(--color-gray-9)' : 'var(--color-gray-0)';

  return (
    <>
      <header>
        {/* Hamburger toggle */}
        {showHamburgerToggle && (
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
        )}

        {/* Breadcrumb */}
        <nav>
          <a href="/" className="logo">
            pelicin
          </a>
          {segments.map((segment, index) => {
            const { text, path } = segment;
            return (
              <span className="breadcrumbItem" key={index}>
                <span className="divider" />
                <a href={path}>{text}</a>
              </span>
            );
          })}
        </nav>

        {/* Right buttons */}
        <span className="buttonsContainer">
          {showTOCToggle && (
            <span className="tocToggleIcon">
              <i
                className={classNames(['fas fa-align-right', { active: isTOCToggled }])}
                onClick={handleClickTOCToggle}
              />
            </span>
          )}
        </span>
      </header>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          height: var(--header-height);
          display: flex;
          align-items: center;
          color: var(--color-gray-0);
          background-image: url('/site/skulls.png'),
            linear-gradient(45deg, ${mainColor}, ${accentColor});
          background-blend-mode: multiply;
          box-shadow: 0 0 4px var(--color-gray-9);
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
          background-color: var(--color-gray-1);
        }
        .hamburgerToggle:hover {
          border: 1px solid rgba(255, 255, 255, 0.6);
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
          transition: background 0.3s;
          padding: var(--spacing-xs) var(--spacing-ms);
          color: inherit;
          text-decoration: none;
          display: inline-block;
          border-radius: var(--border-radius-rounded);
        }
        nav a:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        nav .divider:after {
          font-weight: normal;
          padding-left: var(--spacing-xs);
          padding-right: var(--spacing-xs);
          opacity: 0.5;
          font-size: 22px;
          content: '/';
        }
        @media (max-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          .breadcrumbItem {
            display: none;
          }
        }

        /* Right buttons */
        .buttonsContainer {
          position: absolute;
          right: var(--spacing-ms);
        }
        .buttonsContainer i {
          display: inline-block;
          padding: var(--spacing-s);
          cursor: pointer;
          border-radius: var(--border-radius-normal);
          transition: background-color 0.3s, color 0.3s;
        }
        .buttonsContainer i:hover {
          background-color: #ffffff44;
        }
        .buttonsContainer i.active {
          background-color: var(--color-gray-1);
          color: var(--color-gray-9);
        }
        @media (min-width: ${SHOW_TOC_SIDEBAR_BREAKPOINT_PX}px) {
          .tocToggleIcon {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
