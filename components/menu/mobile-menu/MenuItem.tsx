import Button from "@/components/button/Button";
import ChevronRightIcon from "@/components/icons/icon-collections/header-icons/ChevronRightIcon";
import React from "react";
import { MobileMenuModel } from "./MobileMenu.types";

function MenuItem({ title, isParent }: Readonly<MobileMenuModel>) {
  console.log('isParent', isParent)
  return (
    <li className="rounded-[6px] p-3  flex items-center justify-between group hover:bg-primary-25 h-[46px]">
      <span className="font-national2condensed text-xl mt-1 leading-none font-bold text-neutral-900 duration-300 group-hover:text-primary-500">{title}</span>
      {isParent && (
        <Button variant="ghost" size="icon" className="text-neutral-400 group-hover:text-primary-500 duration-300">
          <ChevronRightIcon />
        </Button>
      )}
    </li>
  );
}

export default MenuItem;
