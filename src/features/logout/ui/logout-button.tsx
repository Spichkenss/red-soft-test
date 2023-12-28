import {useAuth} from "@/app/config/auth/model/auth-context";
import {Button} from "@/shared/ui/button";
import styles from './logout-button.module.scss'

export const LogoutButton = () => {
  const {setToken} = useAuth();

  const handleLogout = () => {
    return setToken(null);
  }

  return (
    <Button onClick={handleLogout} className={styles.logout__btn}>
      Logout
    </Button>
  )
}
