import React, { ReactNode } from 'react';
import { MDXArticleLayout } from './layouts/MDXArticleLayout';

type Props = {
  children: ReactNode;
};

export default function LayoutRenderer(props: Props) {
  const { children } = props;

  if (isMdxComponent(children)) {
    return <MDXArticleLayout>{children}</MDXArticleLayout>;
  }

  return <>{children}</>;
}

function isMdxComponent(children: ReactNode) {
  return Boolean((children as any)?.type?.isMDXComponent);
}
