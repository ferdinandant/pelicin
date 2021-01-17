import React, { ReactNode } from 'react';

type Reference = {
  text?: string | ReactNode;
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
          const { text, link } = reference;
          const useSeparator = Boolean(text && link);
          return (
            <li key={`${index}-${link}`}>
              {text}
              {useSeparator && ' — '}
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
