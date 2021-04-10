import React, { ReactChild } from 'react';

type Props = {
  str: ReactChild;
  var?: boolean;
};

export default function Code(props: Props) {
  if (props.var) {
    return (
      <var>
        <code>{props.str}</code>
      </var>
    );
  }
  return <code>{props.str}</code>;
}
