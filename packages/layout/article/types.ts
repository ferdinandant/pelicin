import { isRegExp } from 'util';

import { ReactNode } from 'react';

export type ArticleTOCItem = {
  titleNode: ReactNode;
  hash: string;
  children: ArticleTOCItem[];
};

export type ArticleTOC = ArticleTOCItem[];
