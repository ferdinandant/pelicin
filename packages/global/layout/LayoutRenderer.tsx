import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function (props: Props) {
  return <>{props.children}</>;
}
