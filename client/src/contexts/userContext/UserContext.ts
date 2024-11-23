import { createContext, Dispatch, SetStateAction } from "react";

type userType = Record<
  string,
  { _id: string; username: string; password: string }
> | null;

interface contextValue {
  userInfo: userType;
  setUserInfo: Dispatch<SetStateAction<userType>>;
}

const UserContext = createContext<contextValue | undefined>(undefined);

export default UserContext;
