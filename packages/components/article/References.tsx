import React, { ReactNode } from 'react';

type Reference = {
  text?: string | ReactNode;
  description?: string;
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
          const { text, description, link } = reference;
          return (
            <li key={`${index}-${link}`}>
              {text}
              {text && description && ' — '}
              {description}
              {(text || description) && link && ' — '}
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
