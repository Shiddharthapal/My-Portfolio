import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}
