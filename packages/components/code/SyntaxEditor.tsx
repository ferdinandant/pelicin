import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import classNames from 'classnames';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  code: string;
  onCodeChange: (newCode: string) => void;
};

const languageToColor = {
  html: 'red',
  css: 'blue',
};

// ================================================================================
// MAIN
// ================================================================================

export default function SyntaxEditor({ language, code, onCodeChange }: Props) {
  const prism: any = typeof window !== 'undefined' && (window as any).Prism;
  const bannerColor = languageToColor[language] || 'gray';

  const [isHighlighterReady, setIsHighlighterReady] = useState(false);

  useEffect(() => {
    if (prism) {
      setIsHighlighterReady(true);
    }
  }, [prism]);

  return (
    <>
      <div className={classNames(['banner', bannerColor])}>{language.toUpperCase()}</div>
      {isHighlighterReady ? (
        <Editor
          value={code}
          onValueChange={(code) => onCodeChange(code)}
          highlight={(code) => prism.highlight(code, prism && prism.languages[language])}
          padding={12}
          style={{
            fontFamily: "source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
            fontSize: 'var(--font-size-tiny)',
            backgroundColor: '#272822',
            borderBottomLeftRadius: 'var(--border-radius-normal)',
            borderBottomRightRadius: 'var(--border-radius-normal)',
            lineHeight: 1.4,
          }}
        />
      ) : (
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
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
        pre {
          margin-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
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
