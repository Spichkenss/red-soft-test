import {Route, Routes} from "react-router-dom";
import {BrowseLayout} from "@/widgets/layouts/browse-layout";
import {RootLayout} from '@/widgets/layouts/root-layout'
import {BrowsePage, HomePage, SignInPage} from "@/pages";
import {RoutePaths} from "../model/routes";
import {ProtectedWrapper, UnauthWrapper} from "./wrappers";

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
