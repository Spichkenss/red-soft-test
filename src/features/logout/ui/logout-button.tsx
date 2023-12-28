import {useAuth} from "@/app/config/auth/model/auth-context";

export const LogoutButton = () => {
  const {setToken} = useAuth();

  const handleLogout = () => {
    return setToken(null);
  }

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  )
}
