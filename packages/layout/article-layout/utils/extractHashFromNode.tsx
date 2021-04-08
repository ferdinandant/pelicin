import React, { ReactNode } from 'react';
import { extractHashFromTitle } from '@pelicin/layout';
/**
 * Given a react node (usually heading), extract URL hash based on its content
 * @param node
 */
export default function extractHashFromNode(node: ReactNode): string | null {
  return extractHashFromTitle(extractHashFromNodeInternal(node));
}

export function extractHashFromNodeInternal(node: ReactNode): string | null {
  if (node === null || node === undefined) {
    return null;
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return convertToURLHash(String(node));
  }
  if (Array.isArray(node)) {
    return node.map((childNode) => extractHashFromNodeInternal(childNode)).join('');
  }

  const { props } = node as React.Component<any, any>;
  const { children, str } = props;
  return extractHashFromNodeInternal(children !== undefined ? children : str);
}

function convertToURLHash(str: string) {
  return str.replace(/[^\w]/g, '-');
}
