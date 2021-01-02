import React, { ReactNode } from 'react';
import style from './Title.css';

type Props = {
  children: ReactNode;
};

export default function Title(props: Props) {
  const { children } = props;

  return (
    <>
      <div>
        <h1>{children}</h1>
      </div>

      <style jsx>{style}</style>
    </>
  );
}
