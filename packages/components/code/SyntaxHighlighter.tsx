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
  const prismInstance: any = typeof window !== 'undefined' && (window as any).Prism;

  const [highlightedCode, setHighlightedCode] = useState(null);

  useEffect(() => {
    if (prismInstance) {
      setHighlightedCode(
        prismInstance.highlight(code, prismInstance.languages[language], language)
      );
    }
  }, []);

  if (!highlightedCode) {
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>;
  }
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
