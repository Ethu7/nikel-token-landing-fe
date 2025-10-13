"use client";

import { useState } from "react";
import Header from "./header.component";
import CustomDrawer from "./custom-drawer.component";

export default function HeaderWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <Header setDrawerOpen={setDrawerOpen} />
      {children}
      <CustomDrawer open={drawerOpen} setOpen={setDrawerOpen} />
    </div>
  );
}
