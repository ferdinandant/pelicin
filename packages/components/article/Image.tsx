import React, { ReactNode } from 'react';
import { extractStringFromNode } from '@pelicin/utils';

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
        {optionalSpace}(Source:{' '}
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
        {(caption || sourceNode) && (
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
        figcaption :global(code)::before,
        figcaption :global(code)::after {
          content: '\`';
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}
