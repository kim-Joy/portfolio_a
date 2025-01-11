import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "data/ThemeProvider";

import LockScreen from "components/LockScreen";

function Layout() {
  const { defaultTheme } = useTheme();

  return (
    <div className={`Layout ${defaultTheme === "theme_light" ? "light--mode" : "dark--mode"}`}>
      <LockScreen />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
