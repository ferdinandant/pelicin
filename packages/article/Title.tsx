import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function Title(props: Props) {
  const { children } = props;

  return (
    <>
      <h1>{children}</h1>

      <style jsx>{`
        h1 {
          margin-top: 2.5rem;
          font-size: 2.5rem;
          font-weight: bold;
          border: initial;
        }
      `}</style>
    </>
  );
}
