import {Suspense, useMemo} from "react";
import {routes} from "@/app/config/routing";
import {AuthAccessType} from "@/app/config/routing/model/routes";
import {Route} from "react-router-dom";


interface RouteRendererProps {
  access: AuthAccessType;
}

export const RouteRenderer = ({access}: RouteRendererProps) => {
  const filteredRoutes = useMemo(() => {
    return Object.values(routes)
      .filter(route => route.access === access);
  }, [access])

  return (
    <>
      {filteredRoutes.map(({path, element}) =>
        <Route
          key={path}
          path={path}
          element={
            <Suspense>
              {element}
            </Suspense>
          }
        />
      )}
    </>
  )
}
