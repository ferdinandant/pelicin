import React, { ReactNode } from 'react';

export default function extractStringFromNode(node: string | ReactNode): string | null {
  if (node === null) {
    return null;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map((childNode) => extractStringFromNode(childNode)).join('');
  }

  const { props } = node as React.Component<any, any>;
  const { children, str } = props;
  return extractStringFromNode(children !== undefined ? children : str);
}
