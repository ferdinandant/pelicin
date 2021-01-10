import React, { useEffect, useState } from 'react';

export default function Typist() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <span>Unprotected self-destruct button</span>
      </div>

      <style jsx>{`
        div {
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-s);
          border-bottom: 1px solid var(--color-gray-3);
        }
        span {
          display: inline-block;
          height: calc(var(--font-size-title-2) + 4px);
          font-size: var(--font-size-title-2);
          border-right: 1px solid var(--color-gray-0);
        }
      `}</style>
    </>
  );
}
