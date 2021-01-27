import React, { useState } from 'react';

type Props = {
  type: string;
  value: string;
};

/**
 * Create uncontrolled-like input
 * (Just to make examples easier to make)
 */
export default function GenericInput(props: Props) {
  const { type, value: initialValue = '' } = props;

  const [value, setValue] = useState(initialValue);

  return <input type={type} value={value} onChange={(e) => setValue(e.target.value)} />;
}
