import React from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout() {
  return (
    <div className="min-h-screen">
      <Nav />
    </div>
  );
}
