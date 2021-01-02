import React, { ReactNode } from 'react';
import style from './Heading.css';

type Props = {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  anchor?: string;
  children: ReactNode;
};

export default function Heading(props: Props) {
  const { heading, anchor, children } = props;
  const HeadingTag = heading;

  return (
    <>
      <HeadingTag>
        {anchor && <a className="anchor" id={anchor} />}
        <a className="hashLink" aria-hidden href={`#${anchor}`} />
        {children}
      </HeadingTag>

      <style jsx>{style}</style>
    </>
  );
}
