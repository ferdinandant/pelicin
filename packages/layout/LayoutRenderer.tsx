import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function (props: Props) {
  const { children } = props;
  console.log(children);

  return <>{props.children}</>;
}
