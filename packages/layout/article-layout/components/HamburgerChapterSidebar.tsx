import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import {
  SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX,
  ChapterSidebarContent,
  useHamburgerToggle,
} from '@pelicin/layout';

// ================================================================================
// TYPES/CONST
// ================================================================================

const SLIDE_ANIMATION_DURATION_MS = 300;
const FADE_ANIMATIOM_DURATION_MS = 200;

const HIDDEN_X_VALUE = 'calc(-1 * var(--sidebar-width))';
const SHOWED_X_VALUE = 'calc(0 * var(--sidebar-width))';

const HIDDEN_BG_VALUE = 'rgba(0, 0, 0, 0)';
const SHOWED_BG_VALUE = 'rgba(0, 0, 0, 0.6)';

// ================================================================================
// MAIN
// ================================================================================

export default function HamburgerChapterSidebar() {
  if (typeof window === 'undefined') {
    return null;
  }
  return <PortalizedSidebarContent />;
}

// ================================================================================
// CHILDREN
// ================================================================================

function PortalizedSidebarContent() {
  const {
    isToggled: isHamburgerToggled,
    setIsToggled: setIsHamburgerToggled,
  } = useHamburgerToggle();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [animationXValue, setAnimationXValue] = useState(HIDDEN_X_VALUE);
  const [animationBGValue, setAnimationBGValue] = useState(HIDDEN_BG_VALUE);
  const [shouldRenderCover, setShouldRenderCover] = useState(false);

  useEffect(() => {
    if (!isSidebarVisible && isHamburgerToggled) {
      animateSlideInSidebar();
    } else if (isSidebarVisible && !isHamburgerToggled) {
      animateSlideOutSidebar();
    }
  }, [isHamburgerToggled]);

  function animateSlideInSidebar() {
    setAnimationXValue(SHOWED_X_VALUE);
    setAnimationBGValue(SHOWED_BG_VALUE);
    setIsSidebarVisible(true);
    setShouldRenderCover(true);
  }

  function animateSlideOutSidebar() {
    setAnimationXValue(HIDDEN_X_VALUE);
    setAnimationBGValue(HIDDEN_BG_VALUE);
    setIsSidebarVisible(false);
    setTimeout(() => {
      setShouldRenderCover(false);
    }, FADE_ANIMATIOM_DURATION_MS);
  }

  const component = (
    <>
      <aside style={{ display: shouldRenderCover ? 'block' : 'none' }}>
        <motion.div
          transition={{ duration: SLIDE_ANIMATION_DURATION_MS / 1000 }}
          animate={{ x: animationXValue }}
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            width: 'calc(999vw)',
            height: 'calc(100vh - var(--header-height))',
            cursor: 'pointer',
          }}
          onClick={() => setIsHamburgerToggled(false)}
        >
          <motion.div
            transition={{ duration: FADE_ANIMATIOM_DURATION_MS / 1000 }}
            animate={{ backgroundColor: animationBGValue }}
          >
            <div>
              <ChapterSidebarContent />
            </div>
          </motion.div>
        </motion.div>
      </aside>

      <style jsx>{`
        aside {
          position: relative;
          z-index: 44;
        }
        aside div {
          position: sticky;
          top: var(--header-height);
          width: calc(var(--sidebar-width));
          height: calc(100vh - var(--header-height));
          background-color: var(--color-sidebar-bg);
          overflow-y: auto;
        }

        @media (min-width: ${SHOW_CHAPTER_SIDEBAR_BREAKPOINT_PX}px) {
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  );

  return ReactDOM.createPortal(component, document.body);
}
