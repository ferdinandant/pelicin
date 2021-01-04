import React, { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  children: ReactNode;
};

// ================================================================================
// MAIN
// ================================================================================

export default function Title(props: Props) {
  const { children } = props;

  return (
    <>
      <div>
        <h1>{children}</h1>
      </div>

      <style jsx>{`
        div {
          margin-bottom: var(--spacing-xxl);
        }

        h1 {
          font-size: var(--font-size-title-1);
          font-weight: bold;
          border: initial;
          border-bottom: 1px solid #cecece;
          margin-left: calc(var(--spacing-m) * -1);
          margin-right: calc(var(--spacing-m) * -1);
          padding-left: var(--spacing-m);
          padding-right: var(--spacing-m);
          padding-bottom: var(--spacing-m);
          line-height: 1.275em;
        }
      `}</style>
    </>
  );
}
