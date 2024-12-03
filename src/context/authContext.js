import { createContext, useContext } from "react";

export const AuthContext = createContext({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
