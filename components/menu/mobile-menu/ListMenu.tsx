import React from "react";
import { MobileMenuModel } from "./MobileMenu.types";
import MenuItem from "./MenuItem";
import { mobileMenuData } from "./mobile-menu.utils";

function ListMenu() {
  const renderMenuItem = (item: MobileMenuModel, index: number) => {
    return <MenuItem key={index} {...item} />;
  };

  return <ul className="w-full">{mobileMenuData.map(renderMenuItem)}</ul>;
}
export default ListMenu;
