import { createContext } from "react";
import { useState } from "react";
export const AppStateContext = createContext();

export const AppStateProvider = (props) => {
  const [uid, setUID] = useState({});

  return (
    <AppStateContext.Provider value={{ uid, setUID }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
