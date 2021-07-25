import React from 'react';
import katex from 'katex';

type ChildrenPropsVariant = {
  children: string;
  block?: boolean;
};

type ExpPropsVariant = {
  exp: string;
  block?: boolean;
};

type Props = ChildrenPropsVariant | ExpPropsVariant;

/**
 * Renders math expression in LaTeX
 * Pass expression as `props.children` or `props.exp`
 *
 * @example
 * <Latex>x = 5</Latex>
 *
 * @example
 * <Latex block>{String.raw`
 *   \begin{aligned}
 *     x &= \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} \\
 *     &= 2 \pm 3i
 *   \end{aligned}
 * `}</Latex>
 */
export default function Latex(props: Props) {
  const { block = false } = props;
  let expressionStr: string;
  if ('exp' in props) {
    expressionStr = props.exp;
  } else {
    expressionStr = props.children;
  }

  const html = katex.renderToString(expressionStr, {
    throwOnError: false,
    displayMode: block,
  });

  return block ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <span dangerouslySetInnerHTML={{ __html: html }} />
  );
}
