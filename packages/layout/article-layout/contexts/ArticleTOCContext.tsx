import React, { useContext } from 'react';
import { ArticleTOC } from '../types';

const ArticleTOCContext = React.createContext<ArticleTOC>([]);

export const ArticleTOCProvider = ArticleTOCContext.Provider;

export function useArticleTOC() {
  return useContext(ArticleTOCContext);
}
