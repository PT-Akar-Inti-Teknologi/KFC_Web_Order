import React, { ComponentProps, HTMLAttributes } from 'react'
import { Avatar } from '../ui/avatar';
import { TierType } from '../icons/models/Tier.types';

export type ProfileAvatarProps = ComponentProps<typeof Avatar> & {
  name?: string;
  src?: string;
  tier?: TierType;
};
