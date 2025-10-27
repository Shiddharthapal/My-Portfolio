import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Nav />
      </div>
      <main className=" ">
        <Outlet />
      </main>
    </div>
  );
}
