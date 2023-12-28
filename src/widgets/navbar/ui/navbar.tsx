import {LogoutButton} from "@/features/logout";
import {NavLink} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing/model/routes";
import {useAuth} from "@/app/config/auth/model/auth-context";
import styles from './navbar.module.scss'

export const Navbar = () => {
  const {token} = useAuth();

  if (!token) return null;

  return (
    <header className={styles.navbar}>
      <nav>
        <NavLink to={RoutePaths.home}>Home</NavLink>
        <NavLink to={RoutePaths.browse}>Browse</NavLink>
      </nav>
      <LogoutButton />
    </header>
  )
}
