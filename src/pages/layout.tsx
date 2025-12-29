import { Outlet } from "react-router";
import NavHeader from "../components/common/nav-header";
import NavFooter from "../components/common/nav-footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <NavHeader />
      <main className="flex-grow p-4 w-full">
        <Outlet />
      </main>
      <NavFooter />
    </div>
  );
};

export default Layout;
