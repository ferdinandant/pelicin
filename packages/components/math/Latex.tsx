import React from 'react';
import katex from 'katex';

type Props = {
  children: string;
  block?: boolean;
};

/**
 * Renders math expression in LaTeX
 *
 * @example
 * <Latex>x = 5</Latex>
 *
 * @example
 * <Latex block>{String.raw`
 *   x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
 * `}</Latex>
 */
export default function Latex(props: Props) {
  const { children, block = false } = props;
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
  });

  return block ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );
}
