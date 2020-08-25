import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Title(props: Props) {
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
          padding-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
}
