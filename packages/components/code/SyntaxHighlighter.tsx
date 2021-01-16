import React from 'react';
import Highlight from 'react-highlight.js';

type Props = {};

export default function SyntaxHighlighter(props: Props) {
  const codeString = '(num) => num + 1';

  return <Highlight language={'javascript'}>{codeString}</Highlight>;
}
