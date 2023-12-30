import {createContext, useContext} from "react";
import {AuthContextValue} from "./types";

export const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("Auth context error!")
  return ctx;
}
