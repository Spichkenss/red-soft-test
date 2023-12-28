import AuthController from "@fake-server/src/auth/auth.controller";
import toast from "react-hot-toast";
import {SignInCredentials} from "@/features/sign-in/model/types/sign-in.types";

export const login = async (credentials: SignInCredentials) => {
  try {
    return await AuthController.login(credentials);
  } catch (e: any) {
    toast.error(e.message)
  }
}
