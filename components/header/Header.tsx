import React from "react";
import HeaderMobile from "./header-mobile/HeaderMobile";
import HeaderDesktop from "./header-desktop/HeaderDesktop";

function Header() {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
}

export default Header;
