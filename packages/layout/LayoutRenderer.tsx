import React, { ReactNode } from 'react';
import { MDXArticleLayout, MetadataContextProvider } from '@pelicin/layout';

type Props = {
  children: ReactNode;
};

// ================================================================================
// MAIN
// ================================================================================

export default function LayoutRenderer(props: Props) {
  const { children } = props;

  // Determine what layout to use
  if (isMdxComponent(children)) {
    return (
      <Providers>
        <MDXArticleLayout>{children}</MDXArticleLayout>
      </Providers>
    );
  }

  return <Providers>{children}</Providers>;
}

// ================================================================================
// HELPERS
// ================================================================================

function Providers(props: { children: ReactNode }) {
  return <MetadataContextProvider>{props.children}</MetadataContextProvider>;
}

function isMdxComponent(children: ReactNode) {
  return Boolean((children as any)?.type?.isMDXComponent);
}
