import React, { ReactNode } from 'react';

type Props = {
  items: ReactNode[];
};

export default function BasicList(props: Props) {
  const { items } = props;

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <style jsx>{`
        li {
        }
      `}</style>
    </>
  );
}
