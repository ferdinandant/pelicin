import React, { ReactNode, ReactElement } from 'react';

type ArticleTOCItem = {
  titleNode: ReactNode;
  hash: string;
  children: ArticleTOCItem[];
};

type ArticleTOC = ArticleTOCItem[];

export function getArticleTOC(children: any): ArticleTOC {
  if (!children) return [];

  const toc = {};
  let currentNode = null;

  for (const child of children) {
    const { props } = child;
    const {} = props;

    console.log('Child', child);
  }
}

function processChildren() {}
