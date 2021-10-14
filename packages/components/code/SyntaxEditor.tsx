import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import classNames from 'classnames';

import { Icon } from '@pelicin/components';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  code: string;
  onCodeChange?: (newCode: string) => void;
  onCodeRun?: () => void;
  onReset?: () => void;
};

const languageToColor = {
  html: 'red',
  css: 'blue',
};

// ================================================================================
// MAIN
// ================================================================================

export default function SyntaxEditor({ language, code, onCodeChange, onCodeRun, onReset }: Props) {
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
      {/* Banner */}
      <div className={classNames(['banner', bannerColor])}>
        <Icon name="edit" /> | <span className="language">{language.toUpperCase()} PLAYGROUND</span>
        <span className="iconBar">
          {/* Run icon */}
          {onCodeRun && (
            <span className="icon" onClick={() => onCodeRun()}>
              <Icon name="play" />
            </span>
          )}
          {/* Reset icon */}
          <span className="icon" onClick={() => onReset && onReset()}>
            <Icon name="sync" />
          </span>
        </span>
      </div>

      {/* Editor */}
      <div className="editor">
        {isHighlighterReady ? (
          <Editor
            value={code}
            onValueChange={(code) => onCodeChange && onCodeChange(code)}
            highlight={(code) => prism.highlight(code, prism && prism.languages[language])}
            padding={12}
            style={{
              fontFamily:
                "source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
              fontSize: 'var(--font-size-small)',
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
      </div>

      <style jsx>{`
        .banner {
          border-top-left-radius: var(--border-radius-normal);
          border-top-right-radius: var(--border-radius-normal);
          padding: var(--spacing-xs) 12px;
          font-size: var(--font-size-tiny);
          background-color: var(--color-gray-7);
          color: var(--color-gray-2);
        }
        .language {
          font-weight: 800;
        }
        .iconBar {
          float: right;
        }
        .icon {
          opacity: 0.6;
          transition: opacity ease 0.3s;
          cursor: pointer;
          margin-left: var(--spacing-s);
        }
        .icon:hover {
          opacity: 1;
        }

        pre {
          margin-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
        pre code {
          white-space: pre-wrap;
        }

        /* Banner colors */
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
