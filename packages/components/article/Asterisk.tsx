import React, { ReactChild } from 'react';

type Props = {
  str: ReactChild;
  children?: ReactChild;
};

export default function Asterisk(props: Props) {
  const { str, children } = props;
  const domID = `ref-${str}`;

  return (
    <>
      {children ? (
        <p>
          <a className="anchor" id={domID}></a>
          <a>({str})</a> {children}
        </p>
      ) : (
        <a href={`#${domID}`}>
          <sup>{str}</sup>
        </a>
      )}

      <style jsx>{`
        a {
          color: var(--color-red-5);
        }
        a:hover {
          text-decoration: none;
        }
        a.anchor {
          position: relative;
          top: -5rem;
        }
        p {
          font-size: var(--font-size-small);
        }
      `}</style>
    </>
  );
}
