import React, { useState, useCallback } from 'react';
import { SyntaxEditor, Icon } from '@pelicin/components';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  code: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function CodeRunner({ language, code: initialCode }: Props) {
  const [code, setCode] = useState(initialCode);
  const [console, setConsole] = useState('');

  const runCode = useCallback(() => {
    setConsole(console + code);
  }, [console, code]);

  return (
    <>
      <div className="editor">
        <SyntaxEditor
          language={language}
          code={code}
          onCodeChange={setCode}
          onCodeRun={runCode}
          onReset={() => setCode(initialCode)}
        />
      </div>
      <div className="consoleContainer">
        <textarea spellCheck={false} readOnly className="console" value={console} />
      </div>

      <style jsx>{`
        .editor {
          position: relative;
          z-index: 2;
        }
        .consoleContainer {
          position: relative;
          top: calc(-1 * var(--border-radius-normal));
          background-color: var(--color-gray-7);
          border-bottom-left-radius: var(--border-radius-normal);
          border-bottom-right-radius: var(--border-radius-normal);
          padding: 12px;
          z-index: 1;
        }
        .console {
          height: 200px;
          width: 100%;
          font-family: source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace;
          border: none;
          background-color: var(--color-gray-7);
          font-size: var(--font-size-tiny);
          color: var(--color-gray-1);
          line-height: 1.5;
          resize: vertical;
        }
      `}</style>
    </>
  );
}
