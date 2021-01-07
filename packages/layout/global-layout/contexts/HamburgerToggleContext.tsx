import React, { ReactNode, useContext, useState } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type HamburgerToggleContextStore = {
  isToggled: boolean;
  setIsToggled: (isToggled: boolean) => void;
};

type HamburgerToggleProviderProps = {
  children: ReactNode;
  initialIsToggled?: boolean;
};

const HamburgerToggleContext = React.createContext<HamburgerToggleContextStore>({
  isToggled: false,
  setIsToggled: () => null,
});

// ================================================================================
// MAIN
// ================================================================================

export function HamburgerToggleProvider(props: HamburgerToggleProviderProps) {
  const { children, initialIsToggled = false } = props;
  const [isToggled, setIsToggled] = useState(initialIsToggled);

  const store = {
    isToggled,
    setIsToggled,
  };

  return (
    <HamburgerToggleContext.Provider value={store}>{children}</HamburgerToggleContext.Provider>
  );
}

export function useHamburgerToggle() {
  return useContext(HamburgerToggleContext);
}
