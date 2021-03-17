import React, { ReactChild } from 'react';

type Props = {
  str: ReactChild;
};

export default function Code(props: Props) {
  return <code>{props.str}</code>;
}
