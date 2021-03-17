import React, { ReactChild } from 'react';

type Props = {
  link: string;
  str: ReactChild;
};

export default function Link({ link, str }: Props) {
  return <a href={link}>{str === undefined ? link : str}</a>;
}
