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
import { convertHSLToHex, convertHexToHSL } from '@pelicin/utils';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  showHamburgerToggle?: boolean;
  showTOCToggle?: boolean;
};

const MIN_COLOR_LIGHTNESS = 45;

// ================================================================================
// MAIN
// ================================================================================

export default function TopBar(props: Props) {
  const { showHamburgerToggle, showTOCToggle } = props;
  const {
    basePath,
    mainColor: rawMainColor,
    accentColor: rawAccentColor,
    topicTitle,
  } = useTopicConfig();
  const { isToggled: isTOCToggled, setIsToggled: setIsTOCToggled } = useTOCToggle();
  const {
    isToggled: isHamburgerToggled,
    setIsToggled: setIsHamburgerToggled,
  } = useHamburgerToggle();

  const segments = useMemo(() => {
    return getBreadcrumbSegments({ basePath, topicTitle });
  }, [basePath, topicTitle]);

  // Ensure color is not too light
  const mainColor = useMemo(() => {
    const { h, s, l } = convertHexToHSL(rawMainColor);
    return convertHSLToHex({ h, s, l: Math.min(l, MIN_COLOR_LIGHTNESS) });
  }, [rawMainColor]);

  // Ensure color is not too light
  const accentColor = useMemo(() => {
    const { h, s, l } = convertHexToHSL(rawAccentColor);
    return convertHSLToHex({ h, s, l: Math.min(l, MIN_COLOR_LIGHTNESS) });
  }, [rawAccentColor]);

  function handleClickHamburger() {
    setIsHamburgerToggled(!isHamburgerToggled);
  }

  function handleClickTOCToggle() {
    setIsTOCToggled(!isTOCToggled);
  }

  return (
    <>
      <header>
        {/* Hamburger toggle */}
        {showHamburgerToggle && (
          <button
            className={classNames(['hamburgerToggle', { active: isHamburgerToggled }])}
            onClick={handleClickHamburger}
          >
            <i className={classNames(['fas fa-bars', { active: isHamburgerToggled }])} />
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
          box-shadow: 0 0 2px rgb(0, 0, 0);
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
          background-image: linear-gradient(45deg, ${mainColor}, ${accentColor});
          z-index: 999;
        }

        /* Hamburger toggle */
        .hamburgerToggle {
          position: absolute;
          display: flex;
          margin-left: var(--spacing-m);
          padding: 6px var(--spacing-m);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--border-radius-normal);
          background-color: transparent;
          color: var(--color-gray-0);
          font-size: var(--font-size-title-3);
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
        .hamburgerToggle.active {
          background-color: var(--color-gray-1);
          color: var(--color-gray-9);
          text-shadow: none;
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
          text-shadow: none;
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
