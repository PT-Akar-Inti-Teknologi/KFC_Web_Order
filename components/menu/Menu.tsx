import React from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import DesktopMenu from "./desktop-menu/DesktopMenu";

function Menu() {
  return (
    <>
      <MobileMenu />
      <DesktopMenu />
    </>
  );
}

export default Menu;
