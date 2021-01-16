import React from 'react';
import Highlight from 'react-highlight.js';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  children: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Preformatted(props: Props) {
  const { language = 'plaintext', children } = props;
  return <Highlight language={language}>{children}</Highlight>;
}
