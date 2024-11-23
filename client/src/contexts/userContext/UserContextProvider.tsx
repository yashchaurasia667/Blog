import { ReactNode, useState } from "react";
import UserContext from "./UserContext";

interface contextProp {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: contextProp) => {
  const [userInfo, setUserInfo] = useState({});

  const value = { userInfo, setUserInfo };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
