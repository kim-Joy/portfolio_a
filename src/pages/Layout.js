import React from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";


function Layout() {
  return (
    <div className="Layout light--mode">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
