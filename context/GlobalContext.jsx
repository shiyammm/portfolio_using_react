import React, { createContext, useRef, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [hoverLink, setHoverLink] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);
  const tl1 = useRef();
  const navLoaderRef = useRef();

  return (
    <GlobalContext.Provider
      value={{
        hoverLink,
        setHoverLink,
        hoverMail,
        setHoverMail,
        tl1,
        navLoaderRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
