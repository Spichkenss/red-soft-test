import {Navbar} from "@/widgets/navbar";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";

export const Layout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Suspense fallback={'loading...'}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}
