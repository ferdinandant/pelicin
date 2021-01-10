import React, { useEffect, useRef, useState } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

const SUSTAIN_TEXT_MS = 3000;
const CURSOR_BLINK_RATE_MS = 800;

const texts = [
  'Average intelligence',
  'Lackluster GPA',
  'Median salary',
  '1x efficiency',
  'Meet-expectation performance',
  'Healthy appetite',
  'Mediocre hobbies',
  'Chronic boredom',
  'Unsatisfiable desires',
];

// ================================================================================
// MAIN
// ================================================================================

export default function Typist() {
  const [displayedText, setDisplayedText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const targetText = useRef(texts[0]);
  const displayedTextRef = useRef('');
  const isCursorVisibleRef = useRef(false);
  const nextTextUpdateTs = useRef(null);
  const nextCursorUpdateTs = useRef(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTs = Date.now();
      // Update current text to show
      if (
        displayedTextRef.current === targetText.current &&
        currentTs >= nextTextUpdateTs.current
      ) {
        const nextTargetTextIndex = Math.floor(Math.random() * texts.length);
        displayedTextRef.current = '';
        nextTextUpdateTs.current = null;
        targetText.current = texts[nextTargetTextIndex];
      } else {
        displayedTextRef.current = targetText.current.slice(0, displayedTextRef.current.length + 1);
      }
      // Prepare for next text
      if (displayedTextRef.current === targetText.current && nextTextUpdateTs.current === null) {
        nextTextUpdateTs.current = currentTs + SUSTAIN_TEXT_MS;
      }
      // Update cursor
      if (currentTs > nextCursorUpdateTs.current) {
        isCursorVisibleRef.current = !isCursorVisibleRef.current;
        nextCursorUpdateTs.current = currentTs + CURSOR_BLINK_RATE_MS;
        setIsCursorVisible(isCursorVisibleRef.current);
      }
      setDisplayedText(displayedTextRef.current);
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <span
          style={{
            borderRight: isCursorVisible
              ? `1px solid var(--color-gray-0)`
              : '1px solid transparent',
          }}
        >
          {displayedText}
        </span>
      </div>

      <style jsx>{`
        div {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-xs);
          border-bottom: 1px solid var(--color-gray-3);
        }
        span {
          display: inline-block;
          font-size: var(--font-size-title-2);
        }
        span::before,
        span::after {
          content: '${'\u00a0'}';
        }
      `}</style>
    </>
  );
}
