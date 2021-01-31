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
      <figure>
        <img width={width} src={path} alt={parsedAlt} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
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
