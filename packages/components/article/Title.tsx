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
          margin-bottom: 2.5rem;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          border: initial;
          border-bottom: 1px solid #e5e5e5;
          margin-left: -16px;
          margin-right: -16px;
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 16px;
          line-height: 3.2rem;
        }
      `}</style>
    </>
  );
}
