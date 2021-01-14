import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function CenteredContainer(props: Props) {
  const { children } = props;

  return (
    <>
      <div className="container">
        <div className="content">{children}</div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
        }
        .content {
          max-width: 640px;
          margin: auto;
        }
      `}</style>
    </>
  );
}
