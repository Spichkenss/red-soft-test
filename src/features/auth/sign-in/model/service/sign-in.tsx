import AuthController from "@fake-server/src/auth/auth.controller";
import toast from "react-hot-toast";
import {SignInCredentials} from "../types/sign-in.types";

export const login = async (credentials: SignInCredentials) => {
  return await toast.promise(
    AuthController.login(credentials),
    {
      loading: 'Signing in...',
      success: <b>Signed in</b>,
      error: <b>Sign in error</b>,
    }
  );
}
