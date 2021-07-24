import React from 'react';
import katex from 'katex';

type Props = {
  children: string;
};

/**
 * Renders a framed math expression in LaTeX
 *
 * @example
 * <LatexBox>{{String.raw`
 *  \mathrm{Lum}(C) = 0.3 \cdot c_\mathrm{red} + 0.59 \cdot c_\mathrm{green} + 0.11 \cdot c_\mathrm{blue}
 * `}}</LatexBox>
 */
export default function Latex(props: Props) {
  const { children: boxedExprStr } = props;

  const html = katex.renderToString(boxedExprStr, {
    throwOnError: false,
  });

  return (
    <>
      <div className="root">
        <div className="boxed">
          <span dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      <style jsx>{`
        .root {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-block: var(--spacing-m);
        }
        .boxed {
          background-color: var(--color-gray-1);
          padding: var(--spacing-m);
          border-radius: var(--spacing-s);
        }
      `}</style>
    </>
  );
}
