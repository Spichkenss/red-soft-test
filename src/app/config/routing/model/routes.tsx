import {RouteProps} from "react-router-dom";
import {HomePage} from "@/pages/home";
import {SignInPage} from "@/pages/sign-in";
import {BrowsePage} from "@/pages/browse";
import {NotFoundPage} from "@/pages/not-found";

enum AppRoutes {
  HOME = "home",
  SIGN_IN = "sign-in",
  BROWSE = "browse",
  NOT_FOUND = "not_found"
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.SIGN_IN]: "/sign-in",
  [AppRoutes.BROWSE]: "/browse",
  [AppRoutes.NOT_FOUND]: "*"
};

export enum AuthAccessType {
  PUBLIC,
  UNAUTH,
  PROTECTED
}

type RoutePropsWithAuthAccessType = RouteProps & {
  access?: AuthAccessType
};


export const routes: Record<AppRoutes, RoutePropsWithAuthAccessType> = {
  [AppRoutes.HOME]: {path: RoutePaths["home"], element: <HomePage/>, access: AuthAccessType.PUBLIC},
  [AppRoutes.SIGN_IN]: {path: RoutePaths["sign-in"], element: <SignInPage/>, access: AuthAccessType.UNAUTH},
  [AppRoutes.BROWSE]: {path: RoutePaths["browse"], element: <BrowsePage/>, access: AuthAccessType.PROTECTED},
  [AppRoutes.NOT_FOUND]: {path: RoutePaths['not_found'], element: <NotFoundPage/>, access: AuthAccessType.PUBLIC}
};
