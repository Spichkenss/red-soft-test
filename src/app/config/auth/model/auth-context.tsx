import {createContext, PropsWithChildren, useContext, useMemo} from "react";
import {AuthContextValue} from "@/app/config/auth/model/types";
import {useLocalStorage} from "@/shared/lib/hooks";

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthContextProviderProps extends PropsWithChildren {}

export const AuthProvider = ({children}: AuthContextProviderProps) => {
  const [token, setToken] = useLocalStorage('token', null);

  const memoizedContextValue = useMemo(() => ({token, setToken}), [setToken, token])

  return (
    <AuthContext.Provider value={memoizedContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("Auth context error!")
  return ctx;
}
