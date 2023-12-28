import {useAuth} from "@/app/config/auth/model/auth-context";
import {PropsWithChildren} from "react";

interface SignedOutProps extends PropsWithChildren {}

export const SignedOut = ({children}: SignedOutProps) => {
  const {token} = useAuth();

  if (token) return null;

  return children;
}
