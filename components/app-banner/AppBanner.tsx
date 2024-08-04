"use client";

import React, { HTMLAttributes } from "react";
import Logo from "../logo/Logo";
import Container from "../container/Container";
import Button from "../button/Button";
import CloseIcon from "../icons/icon-collections/common-icons/CloseIcon";

export type AppBannerProps = Readonly<
  HTMLAttributes<HTMLDivElement>
> & {
  title: string;
  description: string;
  actionButton: string;
  onActionButtonClick: () => void;
  onCloseButtonClick: () => void;
};

function AppBanner({
  title,
  description,
  onActionButtonClick,
  onCloseButtonClick,
  actionButton,
  ...props
}: AppBannerProps) {
  return (
    <div className="bg-neutral-900 py-3 xl:hidden sticky top-0 left-0 right-0 w-full" {...props}>
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Button onClick={onCloseButtonClick} variant="ghost" className="p-0">
              <CloseIcon />
            </Button>
            <div className="flex items-center space-x-2">
              <Logo variant="secondary" className="w-6 h-6" />
              <div className="text-sm text-white">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-xs">{description}</p>
              </div>
            </div>
          </div>

          <Button variant="primary" onClick={onActionButtonClick}>
            {actionButton}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default AppBanner;
