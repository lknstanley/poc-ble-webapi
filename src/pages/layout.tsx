import dayjs from "dayjs";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="bg-blue-600 text-white px-4 py-3 md:px-6 md:py-4 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-lg md:text-xl font-bold">POC WebAPI BLE</h1>
        </div>
      </header>
      <main className="flex-grow p-4 w-full">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 text-center w-full">
        <div className="max-w-7xl mx-auto">
          <p>&copy; {dayjs().year()} POC WebAPI BLE</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
