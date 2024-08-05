"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocalSwitcher } from "./LocalSwitcher.hook";
import ChevronDownIcon from "../icons/icon-collections/header-icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

function LocalSwitcher() {
  const state = useLocalSwitcher();

  return (
    <DropdownMenu onOpenChange={state.setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-white border-white bg-transparent border rounded-full space-x-4"
          disabled={state.isPending}
        >
          {state.localeActive.toUpperCase()}{" "}
          <ChevronDownIcon
            className={cn([
              "duration-300 ease-in-out",
              state.open && "rotate-180 ",
            ])}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        sideOffset={8}
        align="end"
        className="w-[166px]"
      >
        <DropdownMenuItem
          onSelect={() => state.action.onSelect("id")}
          className="text-base"
          textValue="id"
        >
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={() => state.action.onSelect("en")}
          className="text-base"
          textValue="en"
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LocalSwitcher;
