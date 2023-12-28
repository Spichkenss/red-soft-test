import {useAuth} from "@/app/config/auth/model/auth-context";
import {PropsWithChildren} from "react";

interface SignedInProps extends PropsWithChildren {}

export const SignedIn = ({children}: SignedInProps) => {
  const {token} = useAuth();

  if (!token) return null;

  return children;
}
