import { createContext, useContext } from "react";

export const AuthContext = createContext({
  auth: false,
  setAuthUser: () => {},
});

export const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};
