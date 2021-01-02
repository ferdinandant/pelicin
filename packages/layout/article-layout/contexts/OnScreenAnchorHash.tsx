import React, { useContext } from 'react';

const OnScreenAnchorHashContext = React.createContext<string | null>(null);

export const OnScreenAnchorHashProvider = OnScreenAnchorHashContext.Provider;

export function useOnScreenAnchorHash() {
  const value = useContext(OnScreenAnchorHashContext);
  console.log('VALUE', value);
  return value;
}
