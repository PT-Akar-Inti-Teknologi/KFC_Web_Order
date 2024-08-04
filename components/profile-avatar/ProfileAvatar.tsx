import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ImageByTier } from "../icons/utils/Tiers.utils";
import { ProfileAvatarProps } from "./ProfileAvatar.types";
import { getInitials } from "./ProfileAvatar.utils";

function ProfileAvatar({ src, name, tier, ...props }: ProfileAvatarProps) {
  const initials = src ? "" : getInitials(name);
  return (
    <div className="relative w-10 h-12">
      <Avatar className="relative z-0 border-white  border-2" {...props}>
        <AvatarImage src={src} alt={name} className="" />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center">
        {ImageByTier[tier!]}
      </div>
    </div>
  );
}

export default ProfileAvatar;
