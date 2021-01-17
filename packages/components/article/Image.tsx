import React, { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  path: string;
  caption?: string | ReactNode;
  alt?: string;
  width: number | string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Image(props: Props) {
  const { path, width, alt, caption } = props;

  // Parse alt
  let parsedAlt: string;
  if (alt) {
    parsedAlt = alt;
  } else if (caption) {
    parsedAlt = extractStringFromNode(caption);
  }

  return (
    <>
      <div className="imageContainer">
        <img width={width} src={path} alt={parsedAlt} />
      </div>
      {caption && (
        <div className="caption ">
          <div className="captionContent">{caption}</div>
        </div>
      )}

      <style jsx>{`
        .imageContainer {
          text-align: center;
        }
        .caption {
          margin-top: calc(-1 * var(--spacing-xs));
          text-align: center;
        }
        .captionContent {
          font-size: var(--font-size-small);
          background-color: var(--color-gray-1);
          color: var(--color-gray-4);
          display: inline-block;
          padding: var(--spacing-xs) var(--spacing-m);
          border-radius: var(--border-radius-normal);
        }
      `}</style>
    </>
  );
}

// ================================================================================
// HELPERS
// ================================================================================

function extractStringFromNode(node: string | ReactNode): string | null {
  if (node === null) {
    return null;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map((childNode) => extractStringFromNode(childNode)).join('');
  }

  const { props } = node as React.Component<any, any>;
  const { children } = props;
  return extractStringFromNode(children);
}
