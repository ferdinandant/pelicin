import React, { ReactNode, useContext, useState } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type TOCToggleContextStore = {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
};

type TOCToggleProviderProps = {
  children: ReactNode;
  initialIsToggled?: boolean;
};

const TOCToggleContext = React.createContext<TOCToggleContextStore>({
  isToggled: false,
  setIsToggled: () => null,
});

// ================================================================================
// MAIN
// ================================================================================

export function TOCToggleProvider(props: TOCToggleProviderProps) {
  const { children, initialIsToggled = false } = props;
  const [isToggled, setIsToggled] = useState(initialIsToggled);

  const store = {
    isToggled,
    setIsToggled,
  };

  return <TOCToggleContext.Provider value={store}>{children}</TOCToggleContext.Provider>;
}

export function useTOCToggle() {
  return useContext(TOCToggleContext);
}
