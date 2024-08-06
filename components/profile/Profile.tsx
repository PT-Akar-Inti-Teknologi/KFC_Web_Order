"use client";;
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProfile } from "./Profile.hook";
import ProfileAvatar from "../profile-avatar/ProfileAvatar";
import { ProfileMenuListItem } from "./Profile.types";
import { profileMenuList } from "./Profile.utils";
import { ProfileAvatarProps } from "../profile-avatar/ProfileAvatar.types";

type ProfileProps = ProfileAvatarProps;

function Profile(props: Readonly<ProfileProps>) {
  const state = useProfile();
  const renderMenuItem = (item: ProfileMenuListItem) => {
    return (
      <DropdownMenuItem
        key={item.title}
        className="text-base px-4 py-3 cursor-pointer"
        textValue={item.title}
        onSelect={() => state.action.onSelect(item.link)}
      >
        <div className="mr-3">{item.icon}</div>
        {item.title}
      </DropdownMenuItem>
    );
  };
  return (
    <DropdownMenu onOpenChange={state.setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"link"} disabled={state.isPending}>
          <ProfileAvatar {...props} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        sideOffset={8}
        align="end"
        className="w-[280px]"
        alignOffset={12}
      >
        {profileMenuList.map(renderMenuItem)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Profile;
