import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
