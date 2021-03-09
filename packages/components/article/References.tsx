import React, { ReactNode } from 'react';

type Reference = {
  text?: string | ReactNode;
  used?: string;
  link?: string;
};

type Props = {
  references: Array<Reference>;
};

export default function References(props: Props) {
  const { references } = props;
  return (
    <>
      <ul className="referenceContainer">
        {references.map((reference, index) => {
          const { text, used, link } = reference;
          return (
            <li key={`${index}-${link}`}>
              {text}
              {text && used && ' — '}
              {used && (
                <>
                  Appeared in: <a href={used}>{used}</a>
                </>
              )}
              {(text || used) && link && ' — '}
              {link && <a href={link}>{link}</a>}
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        a {
          overflow-wrap: anywhere;
        }
      `}</style>
    </>
  );
}
