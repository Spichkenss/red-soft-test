import {useAuth} from "@/app/config/auth/model/auth-context";
import {Navigate, Outlet} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing/model/routes";


export const ProtectedWrapper = () => {
  const {token} = useAuth();

  if (!token) return <Navigate to={RoutePaths["sign-in"]} replace={true} />

  return <Outlet/>;
}
