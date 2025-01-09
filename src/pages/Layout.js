import React from "react";
import { Outlet } from "react-router-dom";

import Home from "components/Home";


function Layout() {
  return (
    <div className="Layout dark--mode">
      <Home />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
