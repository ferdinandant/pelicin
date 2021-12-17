import React, { Fragment, useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';

import { SyntaxEditor } from '@pelicin/components';
import { stringify } from '@pelicin/utils';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  code: string;
};

type ConsoleMessage = {
  lineBlocks: any[];
  color: 'red' | 'green' | 'white' | 'yellow' | 'blue' | 'purple' | 'gray';
};

// ================================================================================
// MAIN
// ================================================================================

export default function CodeRunner({ language, code: initialCode }: Props) {
  const [code, setCode] = useState(initialCode);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);

  const runCode = useCallback(() => {
    setShowConsole(true);
    setConsoleMessages([]);
    const appendConsoleMessage = (
      lineBlocks: ConsoleMessage['lineBlocks'],
      color: ConsoleMessage['color']
    ) => {
      setConsoleMessages((consoleMessages) => {
        return [...consoleMessages, { lineBlocks, color }];
      });
    };
    const globalSubstitutions = [
      { key: 'window', value: undefined },
      { key: 'console', value: getConsoleSubstitute(appendConsoleMessage) },
    ];
    const argNames = globalSubstitutions.map((sub) => sub.key);
    const argValues = globalSubstitutions.map((sub) => sub.value);
    try {
      // Using `eval` inside function for "cleaner" stack trace
      const escapedCode = code.replace(/`/g, '\\`').replace(/[$]/g, '\\$');
      const fn = new Function(...argNames, `eval(\`${escapedCode}\`);`);
      const startTs = Date.now();
      fn(...argValues);
      const endTs = Date.now();
      appendConsoleMessage([`Run successfully in ${endTs - startTs} ms.`], 'gray');
    } catch (err) {
      appendConsoleMessage([err], 'red');
    }
  }, [consoleMessages, code]);

  const consoleContent = useMemo(() => {
    return (
      <>
        <div className="console">
          {consoleMessages.map((msgLine, lineIdx) => (
            <div key={lineIdx} className={classNames('line', msgLine.color)}>
              {msgLine.lineBlocks.map((block, blockIdx, arr) => {
                const string = stringify(block);
                const hasNextItem = blockIdx < arr.length - 1;
                return (
                  <Fragment key={blockIdx}>
                    <span>{string}</span>
                    {hasNextItem && <span> </span>}
                  </Fragment>
                );
              })}
            </div>
          ))}
        </div>
        <style jsx>{`
          .console {
            height: 150px;
            outline: none;
            font-family: source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace;
            font-size: var(--font-size-tiny);
            color: var(--color-gray-1);
            line-height: 1.5;
            resize: vertical;
            overflow: auto;
          }
          .console .line span {
            white-space: pre;
          }
          .console .white {
            color: var(--color-gray-1);
          }
          .console .red {
            color: var(--color-red-3);
          }
          .console .yellow {
            color: var(--color-yellow-3);
          }
          .console .green {
            color: var(--color-green-3);
          }
          .console .blue {
            color: var(--color-blue-3);
          }
          .console .purple {
            color: var(--color-purple-3);
          }
          .console .gray {
            color: var(--color-gray-4);
          }
        `}</style>
      </>
    );
  }, [consoleMessages]);

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
      {showConsole && <div className="consoleContainer">{consoleContent}</div>}

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
          box-shadow: 0 0 90px var(--color-gray-9) inset;
          padding: 12px;
          z-index: 1;
        }
      `}</style>
    </>
  );
}

// ================================================================================
// HELPERS
// ================================================================================

function getConsoleSubstitute(
  appendConsoleMessage: (
    blocks: ConsoleMessage['lineBlocks'],
    color: ConsoleMessage['color']
  ) => void
) {
  return {
    error: (...blocks) => appendConsoleMessage(blocks, 'red'),
    warn: (...blocks) => appendConsoleMessage(blocks, 'yellow'),
    info: (...blocks) => appendConsoleMessage(blocks, 'green'),
    log: (...blocks) => appendConsoleMessage(blocks, 'white'),
    debug: (...blocks) => appendConsoleMessage(blocks, 'blue'),
    trace: (...blocks) => appendConsoleMessage(blocks, 'purple'),
  };
}
