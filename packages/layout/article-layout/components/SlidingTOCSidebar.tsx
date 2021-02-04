import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

import { SHOW_TOC_SIDEBAR_BREAKPOINT_PX, TOCSidebarContent, useTOCToggle } from '@pelicin/layout';

// ================================================================================
// TYPES/CONST
// ================================================================================

const SLIDE_ANIMATION_DURATION_MS = 300;
const FADE_ANIMATIOM_DURATION_MS = 200;

const HIDDEN_X_VALUE = 'calc(100vw - 0px)';
const SHOWED_X_VALUE = 'calc(100vw - 280px)';

const HIDDEN_BG_VALUE = 'rgba(0, 0, 0, 0)';
const SHOWED_BG_VALUE = 'rgba(0, 0, 0, 0.6)';

// ================================================================================
// MAIN
// ================================================================================

export default function SlidingTOCSidebar() {
  return <PortalizedSlidingTOCSidebar />;
}
// ================================================================================
// CHILDREN
// ================================================================================

function PortalizedSlidingTOCSidebar() {
  const { isToggled: isTOCToggled, setIsToggled: setIsTOCToggled } = useTOCToggle();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [animationXValue, setAnimationXValue] = useState(HIDDEN_X_VALUE);
  const [animationBGValue, setAnimationBGValue] = useState(HIDDEN_BG_VALUE);
  const [shouldRenderCover, setShouldRenderCover] = useState(false);

  useEffect(() => {
    if (!isSidebarVisible && isTOCToggled) {
      animateSlideInSidebar();
    } else if (isSidebarVisible && !isTOCToggled) {
      animateSlideOutSidebar();
    }
  }, [isTOCToggled]);

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
          style={{
            position: 'fixed',
            top: 'var(--header-height)',
            height: 'calc(100vh - var(--header-height))',
            width: 'calc(999vw)',
            cursor: 'pointer',
          }}
          transition={{ duration: FADE_ANIMATIOM_DURATION_MS / 1000 }}
          animate={{ backgroundColor: animationBGValue }}
          onClick={() => setIsTOCToggled(false)}
        >
          <motion.div
            transition={{ duration: SLIDE_ANIMATION_DURATION_MS / 1000 }}
            animate={{ x: animationXValue }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              width: 'calc(999vw)',
              height: 'calc(100vh - var(--header-height))',
            }}
          >
            <div>
              <TOCSidebarContent minimalistic />
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
          background-color: var(--color-gray-0);
          overflow-y: auto;
        }

        @media (min-width: ${SHOW_TOC_SIDEBAR_BREAKPOINT_PX}px) {
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  );

  return ReactDOM.createPortal(component, document.body);
}
