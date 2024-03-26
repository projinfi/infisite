import React, { createContext, useContext, useState } from 'react';

export const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <NavbarContext.Provider value={{ toggled, setToggled }}>
      {children}
    </NavbarContext.Provider>
  );
};