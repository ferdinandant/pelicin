import React, { useEffect, useState } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  language: string;
  children: string;
};

// ================================================================================
// MAIN
// ================================================================================

export default function SyntaxHighlighter(props: Props) {
  const { language = 'none', children: code } = props;
  const prism: any = typeof window !== 'undefined' && (window as any).Prism;

  const [highlightedCode, setHighlightedCode] = useState(null);

  useEffect(() => {
    if (prism) {
      setHighlightedCode(prism.highlight(code, prism.languages[language], language));
    }
  }, [prism]);

  if (highlightedCode) {
    return (
      <pre>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
        />
      </pre>
    );
  }
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
