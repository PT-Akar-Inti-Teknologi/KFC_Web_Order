import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useOthersCategory } from "./OthersCategory.hook";
import { CategoryModel } from "../DesktopMenu.types";
import ChevronDownIcon from "@/components/icons/icon-collections/header-icons/ChevronDownIcon";
import { cn } from "@/lib/utils";

type OthersCategoryProps = {
  title: string;
  icon?: JSX.Element;
};

function OthersCategory({ title, icon }: Readonly<OthersCategoryProps>) {
  const state = useOthersCategory();

  const renderDropdownMenuItem = (item: CategoryModel, index: number) => {
    return (
      <DropdownMenuItem
        key={index}
        onSelect={() => state.action.onSelect(item.to)}
        className="text-lg cursor-pointer"
        textValue={item.name}
      >
        {item.icon}
        <span className="ml-2">{item.name}</span>
      </DropdownMenuItem>
    );
  };

  return (
    <DropdownMenu onOpenChange={state.setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex justify-between p-0 items-center w-[125px] h-8 hover:bg-transparent"
          disabled={state.isPending}
        >
          {icon}
          <span className="text-lg mb-1">{title}</span>
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
        className="w-[150px]"
        alignOffset={-24}
      >
        {state.othersCategoryData.map(renderDropdownMenuItem)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default OthersCategory;
