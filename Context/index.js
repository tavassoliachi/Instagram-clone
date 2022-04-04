import { createContext } from "react";
import { useState } from "react";
export const AppStateContext = createContext();

export const AppStateProvider = (props) => {
  //avatars by userID-s
  const [uid, setUID] = useState({});

  return (
    <AppStateContext.Provider value={{ uid, setUID }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
