import React, { ReactNode } from 'react';
import { MDXArticleLayout } from '@pelicin/layout';

type Props = {
  children: ReactNode;
};

export default function LayoutRenderer(props: Props) {
  const { children } = props;

  // Determine what layout to use
  if (isMdxComponent(children)) {
    return <MDXArticleLayout>{children}</MDXArticleLayout>;
  }

  return <>{children}</>;
}

function isMdxComponent(children: ReactNode) {
  return Boolean((children as any)?.type?.isMDXComponent);
}
