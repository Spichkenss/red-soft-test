import AuthController from "@/fake-server/src/auth/auth.controller";


export const login = async () => {
  try {
    const user = await AuthController.login({login: "admin", password: "admin"});
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}
