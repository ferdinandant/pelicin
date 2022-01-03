import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { debounce } from 'debounce';

import { useTopicConfig } from '@pelicin/config';
import {
  ArticleTOCItem,
  useArticleTOC,
  OnScreenAnchorHashProvider,
  useOnScreenAnchorHash,
  getDisplayedTOCAnchorHashes,
} from '@pelicin/layout';
import { convertHexToHSL, convertHSLToHex } from '@pelicin/utils';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  minimalistic?: boolean;
};

type TOCSidebarItemProps = {
  tocItem: ArticleTOCItem;
  headerLevel?: number;
  onClickSidebarItem: (anchorHash: string) => void;
};

const ANCHOR_VIEWED_THRESHOLD_VH = 1 / 3;

const SCROLL_EVENT_COOLDOWN_MS = 50;

// ================================================================================
// MAIN
// ================================================================================

export default function TOCSidebarContent({ minimalistic }: Props) {
  const toc = useArticleTOC();
  const { accentColor: rawAccentColor } = useTopicConfig();
  const anchorHashes = getDisplayedTOCAnchorHashes(toc);

  const [onScreenAnchorHash, setOnScreenAnchorHash] = useState<string>(null);
  const lastClickSidebarItemTsRef = useRef<number>(Date.now() - 1000);

  // Ensure accent color is not too light
  const accentColor = useMemo(() => {
    const { h, s, l } = convertHexToHSL(rawAccentColor);
    return convertHSLToHex({ h, s, l: Math.min(l, 50) });
  }, [rawAccentColor]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, SCROLL_EVENT_COOLDOWN_MS);
    // Initialize `onScreenAnchorHash` value on load
    handleScroll();
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const currentTs = Date.now();
    const lastClickSidebarItemTs = lastClickSidebarItemTsRef.current;
    let newOnScreenAnchorHash = anchorHashes[0];
    // Do not consider scroll event when user just clicked on sidebar item
    // (Prevent the highlighted item to be directly overwritten by the scroll event)
    // We set 2 * cooldown to give ample amount of time after debounce.
    if (currentTs - lastClickSidebarItemTs < 2 * SCROLL_EVENT_COOLDOWN_MS) {
      return;
    }
    // Find the last `anchorHash` which has not passed the "viewed" threshold
    for (const anchorHash of anchorHashes) {
      const element = window.document.getElementById(anchorHash);
      const rect = element && element.getBoundingClientRect();
      if (!element) {
        continue;
      }
      const threshold = ANCHOR_VIEWED_THRESHOLD_VH * window.innerHeight;
      if (rect.top <= threshold) {
        newOnScreenAnchorHash = anchorHash;
      } else {
        break;
      }
    }
    setOnScreenAnchorHash(newOnScreenAnchorHash);
  }, [lastClickSidebarItemTsRef, typeof window !== 'undefined' && window.innerHeight]);

  const handleClickSidebarItem = useCallback(
    (anchorHash) => {
      lastClickSidebarItemTsRef.current = Date.now();
      setOnScreenAnchorHash(anchorHash);
    },
    [lastClickSidebarItemTsRef]
  );

  return (
    <>
      <OnScreenAnchorHashProvider value={onScreenAnchorHash}>
        <nav>
          <ul>
            {toc.map((tocItem, index) => {
              const { hash } = tocItem;
              const key = `${index}-${hash}`;
              return (
                <React.Fragment key={key}>
                  <TOCSidebarItem tocItem={tocItem} onClickSidebarItem={handleClickSidebarItem} />
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      </OnScreenAnchorHashProvider>

      <style jsx>{`
        nav {
          padding: 0 var(--spacing-ms);
          padding-left: 0;
          padding-right: var(--spacing-xxl);
          font-size: var(--font-size-tiny);
          line-height: 1.4;
        }
        nav > ul {
          padding-top: 1px;
          padding-bottom: 1px;
          border-left: ${minimalistic ? 'none' : `1px solid ${accentColor}55`};
          list-style-type: none;
          position: relative;
        }
      `}</style>
    </>
  );
}

// ================================================================================
// CHILDREN
// ================================================================================

function TOCSidebarItem(props: TOCSidebarItemProps) {
  const { tocItem, headerLevel = 1, onClickSidebarItem } = props;
  const { accentColor: rawAccentColor } = useTopicConfig();
  const onScreenAnchorHash = useOnScreenAnchorHash();
  const { hash, titleNode, children } = tocItem;
  const isOnScreen = hash === onScreenAnchorHash;

  // Ensure accent color is not too light
  const accentColor = useMemo(() => {
    const { h, s, l } = convertHexToHSL(rawAccentColor);
    return convertHSLToHex({ h, s, l: Math.min(l, 50) });
  }, [rawAccentColor]);

  if (headerLevel > 3) {
    return null;
  }
  return (
    <>
      <li>
        {/* Current TOC node */}
        <a
          href={'#' + hash}
          onClick={() => onClickSidebarItem(hash)}
          className={classNames({ active: isOnScreen })}
        >
          {Array(headerLevel - 1)
            .fill(true)
            .map((_, index, array) => {
              const isLastItem = index === array.length - 1;
              const content = isLastItem && (headerLevel === 2 ? '=' : '\u2212');
              return (
                <span key={index} className="spacer">
                  {content}
                </span>
              );
            })}
          <span className={classNames({ bold: headerLevel === 1 })}>{titleNode}</span>
        </a>
        {/* Children TOC node */}
        {children.length > 0 && (
          <ul>
            {children.map((child, index) => {
              const { hash } = child;
              const key = `${index}-${hash}`;
              return (
                <React.Fragment key={key}>
                  <TOCSidebarItem
                    tocItem={child}
                    headerLevel={headerLevel + 1}
                    onClickSidebarItem={onClickSidebarItem}
                  />
                </React.Fragment>
              );
            })}
          </ul>
        )}
      </li>

      <style jsx>{`
        a {
          display: flex;
          position: relative;
          margin: var(--spacing-s) 0;
          color: var(--color-gray-9);
          text-decoration: none;
          cursor: pointer;
          opacity: 0.4;
        }
        a:hover {
          color: ${accentColor};
          opacity: 1;
        }
        ul {
          list-style-type: none;
          margin: var(--spacing-s) 0;
        }
        li {
          margin-left: 0;
          padding-left: 0;
          margin: var(--spacing-s) 0;
        }
        li a {
          padding-left: var(--spacing-m);
        }
        a.active {
          color: ${accentColor};
          opacity: 1;
        }
        a.active::before {
          content: '';
          height: 100%;
          left: -2px;
          position: absolute;
          border-right: 6px solid ${accentColor};
          border-radius: var(--border-radius-normal);
        }
        .bold {
          font-weight: bold;
        }
        .spacer {
          display: inline-block;
          width: var(--spacing-m);
          opacity: 0.5;
          flex-grow: 0;
          flex-shrink: 0;
          user-select: none;
        }
      `}</style>
    </>
  );
}
