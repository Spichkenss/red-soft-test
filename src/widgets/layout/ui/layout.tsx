import {Navbar} from "@/widgets/navbar";
import {Outlet} from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
