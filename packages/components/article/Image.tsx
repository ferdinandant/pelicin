import React, { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  path: string;
  caption?: string | ReactNode;
  alt?: string;
  width: number | string;
  sourceString?: string;
  sourceLink?: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Image(props: Props) {
  const { path, width, alt, caption, sourceLink, sourceString } = props;

  // Parse alt
  let parsedAlt: string;
  if (alt) {
    parsedAlt = alt;
  } else if (caption) {
    parsedAlt = extractStringFromNode(caption);
  }

  // Parse source
  let sourceNode;
  if (sourceLink) {
    const parsedSourceString = sourceString || 'source';
    const optionalSpace = caption ? ' ' : '';
    sourceNode = (
      <>
        {optionalSpace}(
        <a target="_blank" rel="noreferrer" href={sourceLink}>
          {parsedSourceString}
        </a>
        )
      </>
    );
  } else if (sourceString) {
    const optionalSpace = caption ? ' ' : '';
    sourceNode = (
      <>
        {optionalSpace}(Source: {sourceString})
      </>
    );
  }

  return (
    <>
      <figure>
        <img width={width} src={path} alt={parsedAlt} />
        {caption && (
          <figcaption>
            {caption}
            {sourceNode}
          </figcaption>
        )}
      </figure>

      <style jsx>{`
        figcaption :global(code) {
          background-color: none;
          padding: 0;
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
