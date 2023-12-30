import {Route, Routes} from "react-router-dom";
import {HomePage} from "@/pages/home";
import {RoutePaths} from "@/app/config/routing/model/routes";
import {ProtectedWrapper} from "@/app/config/routing/ui/wrappers/protected-wrapper";
import {UnauthWrapper} from "@/app/config/routing/ui/wrappers/unauth-wrapper";
import {BrowsePage} from "@/pages/browse";
import {SignInPage} from "@/pages/sign-in";
import {BrowseLayout} from "@/widgets/layouts/browse-layout";
import {RootLayout} from '@/widgets/layouts/root-layout'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public pages */}
        <Route path={RoutePaths.home} element={<HomePage/>}/>

        {/* Protected pages */}
        <Route element={<ProtectedWrapper/>}>
          <Route element={<BrowseLayout/>}>
            <Route path={RoutePaths.browse} element={<BrowsePage/>}/>
          </Route>
        </Route>

        {/* Pages unavailable while authed */}
        <Route element={<UnauthWrapper/>}>
          <Route path={RoutePaths["sign-in"]} element={<SignInPage/>}/>
        </Route>

      </Route>
    </Routes>
  )
}
