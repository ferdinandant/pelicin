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

  const runCode = useCallback(() => {
    alert();
  }, [code]);

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
    </>
  );
}
