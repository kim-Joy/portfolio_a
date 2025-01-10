import React from "react";
import { Outlet } from "react-router-dom";

import LockScreen from "components/LockScreen";


function Layout() {
  return (
    <div className="Layout light--mode">
      <LockScreen />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
