import React, { useContext } from 'react';

const OnScreenAnchorHashContext = React.createContext<string | null>(null);

export const OnScreenAnchorHashProvider = OnScreenAnchorHashContext.Provider;

export function useOnScreenAnchorHash() {
  return useContext(OnScreenAnchorHashContext);
}
