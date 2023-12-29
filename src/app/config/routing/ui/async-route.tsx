import {Route, RouteProps} from "react-router-dom";
import {Suspense} from "react";

const AsyncRoute = ({element, ...rest}: RouteProps) => {
  return (
    <Route
      element={<Suspense>{element}</Suspense>}
      {...rest}
    />
  )
}

export default AsyncRoute;
