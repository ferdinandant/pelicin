import React, { ReactNode } from 'react';

/**
 * Given a react node (usually heading), extract URL hash based on its content
 * @param node
 */
export default function extractHashFromNode(node: ReactNode): string | null {
  if (node === null) {
    return null;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return convertToURLHash(String(node));
  }
  if (Array.isArray(node)) {
    return node.map((childNode) => extractHashFromNode(childNode)).join('');
  }

  const { props } = node as React.Component<any, any>;
  const { children } = props;
  return extractHashFromNode(children);
}

function convertToURLHash(str: string) {
  return str.replace(/[^\w]/g, '-');
}
