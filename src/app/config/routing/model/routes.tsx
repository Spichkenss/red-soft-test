import {RouteProps} from "react-router-dom";
import HomePage from "@/pages/home/ui/home-page";
import SignInPage from "@/pages/sign-in/ui/sign-in-page";
import BrowsePage from "@/pages/browse/ui/browse-page";
import NotFoundPage from "@/pages/not-found/ui/not-found-page";

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

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {path: RoutePaths["home"], element: <HomePage/>},
  [AppRoutes.SIGN_IN]: {path: RoutePaths["sign-in"], element: <SignInPage/>},
  [AppRoutes.BROWSE]: {path: RoutePaths["browse"], element: <BrowsePage/>},
  [AppRoutes.NOT_FOUND]: {path: RoutePaths['not_found'], element: <NotFoundPage/>}
};
