import {NavLink} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing";
import styles from './navbar.module.scss'
import {GoToSignInPageButton} from "@/features/auth/sign-in";
import {SignedIn, SignedOut} from "@/shared/lib/containers/auth";
import {LogoutButton} from "@/features/auth/logout";

export const Navbar = () => {
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
        <GoToSignInPageButton/>
      </SignedOut>
    </header>
  )
}
