import {Route, Routes} from "react-router-dom";
import {routes} from "../model/routes";
import {Suspense} from "react";

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routes).map(({path, element}) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
