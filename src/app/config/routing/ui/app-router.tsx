import {Route, Routes} from "react-router-dom";
import {Layout} from "@/widgets/layout";
import {HomePage} from "@/pages/home";
import {RoutePaths} from "@/app/config/routing/model/routes";
import {ProtectedWrapper} from "@/app/config/routing/ui/wrappers/protected-wrapper";
import {UnauthWrapper} from "@/app/config/routing/ui/wrappers/unauth-wrapper";
import {BrowsePage} from "@/pages/browse";
import {SignInPage} from "@/pages/sign-in";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path={RoutePaths.home} element={<HomePage/>}/>
        <Route element={<ProtectedWrapper/>}>
          <Route path={RoutePaths.browse} element={<BrowsePage/>}/>
        </Route>
        <Route element={<UnauthWrapper/>}>
          <Route path={RoutePaths["sign-in"]} element={<SignInPage/>}/>
        </Route>
      </Route>
    </Routes>
  )
}
