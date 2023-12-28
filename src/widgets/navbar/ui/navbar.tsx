import {LogoutButton} from "@/features/logout";
import {NavLink, useNavigate} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing/model/routes";
import styles from './navbar.module.scss'
import {Button} from "@/shared/ui/button";
import {SignedIn, SignedOut} from "@/shared/lib/containers/auth";

export const Navbar = () => {
  const navigate = useNavigate();

  const goToBrowsePage = () => {
    navigate(RoutePaths.browse)
  }

  return (
    <header className={styles.navbar}>
      <nav>
        <NavLink to={RoutePaths.home}>Home</NavLink>
        <NavLink to={RoutePaths.browse}>Browse</NavLink>
      </nav>
      <SignedIn>
        <LogoutButton />
      </SignedIn>
      <SignedOut>
        <Button onClick={goToBrowsePage}>
          Sign in
        </Button>
      </SignedOut>
    </header>
  )
}
