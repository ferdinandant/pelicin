import React, { ReactChild } from 'react';

type Props = {
  children: ReactChild;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export function Header(props: Props) {
  const { children, level } = props;

  const headerComponent = React.createElement(`h${level}`, children);

  return <>{headerComponent}</>;
}
