import React, { useEffect, useState } from 'react';
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
  const { isToggled: isHamburgerToggled } = useHamburgerToggle();

  const [lastAnimatedHamburgerToggle, setLastAnimatedHamburgerToggle] = useState(false);
  const [animationXValue, setAnimationXValue] = useState(HIDDEN_X_VALUE);
  const [animationBGValue, setAnimationBGValue] = useState(HIDDEN_BG_VALUE);
  const [animationDisplayValue, setAnimationDisplayValue] = useState('none');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (lastAnimatedHamburgerToggle === false && isHamburgerToggled === true) {
      animateFlyInMenu();
    } else if (lastAnimatedHamburgerToggle === true && isHamburgerToggled === false) {
      animateFlyOutMenu();
    }
  }, [isHamburgerToggled]);

  function animateFlyInMenu() {
    setAnimationXValue(SHOWED_X_VALUE);
    setAnimationBGValue(SHOWED_BG_VALUE);
    setLastAnimatedHamburgerToggle(true);
  }

  function animateFlyOutMenu() {
    setAnimationXValue(HIDDEN_X_VALUE);
    setAnimationBGValue(HIDDEN_BG_VALUE);
    setLastAnimatedHamburgerToggle(false);
  }

  function showOrHideBackgroundCover() {
    if (lastAnimatedHamburgerToggle === false) {
      // setAnimationDisplayValue('none');
    }
  }

  console.log(isReady, animationXValue);

  const component = (
    <>
      <aside>
        <motion.div
          transition={{
            duration: 0.3,
          }}
          animate={{
            x: animationXValue,
          }}
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            width: 'calc(999vw)',
            height: 'calc(100vh - var(--header-height))',
            display: animationDisplayValue,
          }}
        >
          <motion.div
            transition={{ duration: 0.2 }}
            animate={{ backgroundColor: animationBGValue }}
            // onAnimationStart={showOrHideBackgroundCover}
            onAnimationComplete={showOrHideBackgroundCover}
          >
            <div>
              <ChapterSidebarContent />
            </div>
          </motion.div>
        </motion.div>
      </aside>

      <style jsx>{`
        aside div {
          position: sticky;
          top: var(--header-height);
          width: calc(var(--sidebar-width));
          height: calc(100vh - var(--header-height));
          background-color: var(--color-light-stain);
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
