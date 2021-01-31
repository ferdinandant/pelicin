import React from 'react';

type Props = {
  str: string;
};

export default function Code(props: Props) {
  return <code>{props.str}</code>;
}
