import {ComponentProps, ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {RoutePaths} from "@/app/config/routing/model/routes";
import {useAuth} from "@/app/config/auth/model/auth-context";


export const withoutAuth = <TComponent extends ComponentType<any>>
  (Component: TComponent) => {
  return (props: ComponentProps<TComponent>) => {
    const {token} = useAuth();

    if (token) {
      return <Navigate replace={true} to={RoutePaths.home} />
    }

    return <Component {...props} />;
  };
};
