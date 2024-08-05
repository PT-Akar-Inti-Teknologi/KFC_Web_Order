import Button from "@/components/button/Button";
import ChevronRightIcon from "@/components/icons/icon-collections/header-icons/ChevronRightIcon";
import React from "react";

export type MenuItemProps = {
  title: string;
  isParent?: boolean;
};

function MenuItem({ title, isParent }: MenuItemProps) {
  return (
    <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">
      <span>{title}</span>

      {isParent && (
        <Button variant="ghost" size="icon">
          <ChevronRightIcon />
        </Button>
      )}
    </li>
  );
}

export default MenuItem;
