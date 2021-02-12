import React, { useState } from 'react';
import { SyntaxEditor, Icon } from '@pelicin/components';

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
            onReset={() => setCSSContent(css)}
          />
        </div>
      )}
      {html && (
        <div className="editor">
          <SyntaxEditor
            language="html"
            code={htmlContent}
            onCodeChange={(code) => setHTMLContent(code)}
            onReset={() => setHTMLContent(html)}
          />
        </div>
      )}

      <div className="previewBanner">
        <Icon name="eye" /> | <span className="label">PREVIEW</span>
      </div>
      <div className="previewContainer">
        <style dangerouslySetInnerHTML={{ __html: cssContent }} />
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>

      <style jsx>{`
        .editor:not(:first-child) {
          margin-top: var(--spacing-m);
        }

        .previewBanner {
          margin-top: var(--spacing-m);
          border-top-left-radius: var(--border-radius-normal);
          border-top-right-radius: var(--border-radius-normal);
          padding: var(--spacing-xs) 12px;
          font-size: var(--font-size-tiny);
          background-color: var(--color-gray-4);
          color: var(--color-gray-1);
        }
        .previewBanner .label {
          font-weight: 800;
        }
        .previewContainer {
          border: 2px solid var(--color-gray-2);
          border-top: none;
          border-bottom-left-radius: var(--border-radius-normal);
          border-bottom-right-radius: var(--border-radius-normal);
          padding: var(--spacing-m);
        }
      `}</style>
    </>
  );
}
