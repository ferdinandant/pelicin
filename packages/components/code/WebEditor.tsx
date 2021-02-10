import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';

import { SyntaxEditor } from '@pelicin/components';

type Props = {
  html: string;
  css: string;
};

export default function HTMLCSSEditor({ html, css }: Props) {
  const prism: any = typeof window !== 'undefined' && (window as any).Prism;

  const [htmlContent, setHTMLContent] = useState(html);
  const [cssContent, setCSSContent] = useState(css);

  return (
    <>
      {css && (
        <SyntaxEditor
          language="css"
          code={cssContent}
          onCodeChange={(code) => setCSSContent(code)}
        />
      )}

      {html && (
        <SyntaxEditor
          language="css"
          code={htmlContent}
          onCodeChange={(code) => setCSSContent(code)}
        />
      )}

      <style jsx>{`
        .banner {
          border-top-left-radius: var(--border-radius-normal);
          border-top-right-radius: var(--border-radius-normal);
          padding: var(--spacing-xs) 12px;
          font-size: var(--font-size-tiny);
          font-weight: 800;
          background-color: var(--color-gray-7);
          color: var(--color-gray-2);
        }
        .banner:not(:first-child) {
          margin-top: var(--spacing-s);
        }

        .banner.red {
          background-color: var(--color-red-7);
          color: var(--color-red-2);
        }
        .banner.blue {
          background-color: var(--color-blue-7);
          color: var(--color-blue-2);
        }
      `}</style>
    </>
  );
}
