import {useAuth} from "@/app/config/auth/model/auth-context";
import {Button} from "@/shared/ui/button";

export const LogoutButton = () => {
  const {setToken} = useAuth();

  const handleLogout = () => {
    return setToken(null);
  }

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  )
}
