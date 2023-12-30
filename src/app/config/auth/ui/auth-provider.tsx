import {useLocalStorage} from "@/shared/lib/hooks";
import {PropsWithChildren, useMemo} from "react";
import {AuthContext} from "../model/auth-context";

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
