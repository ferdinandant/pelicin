import React, { useState } from 'react';
import { SyntaxEditor, LightBox } from '@pelicin/components';

type Props = {
  html: string;
  css: string;
};

export default function HTMLCSSEditor({ html = '', css = '' }: Props) {
  const [htmlContent, setHTMLContent] = useState(html);
  const [cssContent, setCSSContent] = useState(css);

  return (
    <>
      {css && (
        <div className="editor">
          <SyntaxEditor
            language="css"
            code={cssContent}
            onCodeChange={(code) => setCSSContent(code)}
          />
        </div>
      )}
      {html && (
        <div className="editor">
          <SyntaxEditor
            language="html"
            code={htmlContent}
            onCodeChange={(code) => setHTMLContent(code)}
          />
        </div>
      )}
      <LightBox containerStyle={{ marginTop: 'var(--spacing-s)' }} label="Preview">
        <style dangerouslySetInnerHTML={{ __html: cssContent }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </LightBox>

      <style jsx>{`
        .editor {
          margin-top: var(--spacing-xs);
        }
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
