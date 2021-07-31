import React, { ReactChild } from 'react';

type Props = {
  str: ReactChild;
  explanation?: true;
};

export default function Asterisk(props: Props) {
  const { str, explanation } = props;
  const domID = `ref-${str}`;

  return (
    <>
      {explanation ? (
        <p>
          <a className="anchor" id={domID}></a>
          <a>({str})</a> {explanation}
        </p>
      ) : (
        <a href={`#${domID}`}>{str}</a>
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
      `}</style>
    </>
  );
}
