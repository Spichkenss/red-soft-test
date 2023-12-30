import {Navbar} from "@/widgets/navbar";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {PageLoader} from "@/widgets/page-loader";

export const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <main className={'main'}>
        <Suspense fallback={<PageLoader/>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}
