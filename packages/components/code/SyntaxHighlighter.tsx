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

  const [highlightedCode, setHighlightedCode] = useState(escapeCode(code));

  useEffect(() => {
    if (prismInstance) {
      setHighlightedCode(
        prismInstance.highlight(code, prismInstance.languages[language], language)
      );
    }
  }, []);

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

// ================================================================================
// HANDLERS
// ================================================================================

function escapeCode(code) {
  return code.replace(/[&<>]/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      default:
        return char;
    }
  });
}
