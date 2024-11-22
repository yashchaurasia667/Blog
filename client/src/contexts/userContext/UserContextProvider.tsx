import { ReactNode } from "react";
import UserContext from "./UserContext";

interface contextProp {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: contextProp) => {
  const value = {};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
