import React, { useState } from 'react';
import { SyntaxHighlighter } from '@pelicin/components';

type Props = {
  html: string;
  css: string;
};

export default function HTMLCSSEditor({ html, css }: Props) {
  const [htmlContent, setHTMLcontent] = useState(html);
  return (
    <>
      <SyntaxHighlighter language="html">{htmlContent}</SyntaxHighlighter>
    </>
  );
}
