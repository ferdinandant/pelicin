import React, { ReactNode } from 'react';
import { useTopicConfig } from '@pelicin/config';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  anchor?: string;
  children: ReactNode;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Heading(props: Props) {
  const { heading, anchor, children } = props;
  const { mainColor } = useTopicConfig();
  const HeadingTag = heading;

  return (
    <>
      {/* No anchor for h1 */}
      <HeadingTag>
        {heading === 'h1' ? (
          children
        ) : (
          <>
            {anchor && <a className="anchor" id={anchor} />}
            <a className="hashLink" tabIndex={-1} aria-hidden href={`#${anchor}`} />
            {children}
          </>
        )}
      </HeadingTag>

      <style jsx>
        {`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            position: relative;
          }
          h1 {
            margin-left: calc(var(--spacing-ms) * -1);
            margin-right: calc(var(--spacing-ms) * -1);
            padding-left: var(--spacing-ms);
            padding-right: var(--spacing-ms);
            border-bottom: 4px dotted ${mainColor}88;
          }
          h2 {
            margin-left: calc(var(--spacing-s) * -1);
            margin-right: calc(var(--spacing-s) * -1);
            padding-left: var(--spacing-s);
            padding-right: var(--spacing-s);
          }

          a.anchor {
            position: relative;
            top: -5rem;
          }
          a.hashLink {
            position: absolute;
            display: inline-block;
            width: 28px;
            left: -28px;
            padding-right: 8px;
            font-style: normal;
            font-weight: normal;
            text-align: right;
            text-decoration: none;
            color: var(--color-gray-2);
            opacity: 0;
          }
          h2 a.hashLink {
            padding-right: 0;
          }
          a.hashLink::before {
            content: '#';
          }

          h2:hover a.hashLink,
          h3:hover a.hashLink,
          h4:hover a.hashLink,
          h5:hover a.hashLink,
          h6:hover a.hashLink {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}
