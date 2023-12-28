import {Route, Routes} from "react-router-dom";
import {Layout} from "@/widgets/layout";
import {Suspense} from "react";
import {ProtectedWrapper} from "@/app/config/routing/ui/protected-wrapper";
import {AnonymousWrapper} from "@/app/config/routing/ui/anonymous-wrapper";
import {SignInPage} from "@/pages/sign-in";
import {BrowsePage} from "@/pages/browse";
import {HomePage} from "@/pages/home";


export const AppRouter = () => {

  return (
    <Routes>

      <Route element={<Layout/>}>
        <Route
          index={true}
          path={'/'}
          element={
            <Suspense>
              <HomePage/>
            </Suspense>}
        />
        <Route element={<ProtectedWrapper/>}>
          <Route
            path={'/browse'}
            element={
              <Suspense>
                <BrowsePage/>
              </Suspense>
            }/>
        </Route>
      </Route>

      <Route element={<AnonymousWrapper/>}>
        <Route
          path={'/sign-in'}
          element={
            <Suspense>
              <SignInPage/>
            </Suspense>}
        />
      </Route>



    </Routes>
  )
}
