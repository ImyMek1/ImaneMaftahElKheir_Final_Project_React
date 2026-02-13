import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // REGISTER
  const register = (data) => {
    setUser(data);
  };

  // LOGIN
  const login = (email, password) => {
    if (!user) return false;

    if (user.email === email && user.password === password) {
      return true;
    }

    return false;
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
