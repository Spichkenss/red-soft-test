import {useAuth} from "@/app/config/auth/model/auth-context";
import {Navigate, Outlet} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing/model/routes";


export const AnonymousWrapper = () => {
  const {token} = useAuth();

  if (token) return <Navigate to={RoutePaths.home} replace={true}/>

  return <Outlet/>;
}
