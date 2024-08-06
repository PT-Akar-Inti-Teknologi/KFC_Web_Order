import Button from "@/components/button/Button";
import EnterPromoCodeButton from "@/components/button/EnterPromoCodeButton";
import Container from "@/components/container/Container";
import MenuIcon from "@/components/icons/icon-collections/header-icons/MenuIcon";
import LocalSwitcher from "@/components/local-switcher/LocalSwitcher";
import Logo from "@/components/logo/Logo";
import Profile from "@/components/profile/Profile";
import React from "react";
import ListCategory from "./list-category/ListCategory";
function DesktopMenu() {
  return (
    <header className="hidden xl:block ">
      <div className="bg-primary-500 h-[72px] flex items-center">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Button variant="ghost" size="icon">
                <MenuIcon />
              </Button>
              <Logo variant="primary" className="w-[120px] h-[30px]" />
              <div className="w-[360px] bg-white h-[40px] flex items-center justify-center">
                <span>Deliver to</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <EnterPromoCodeButton />
              <LocalSwitcher />
              <div className=" w-10 h-10 relative">
                <div className="absolute top-1 ">
                  <Profile name="John Doe" tier="basic" src="/images/profile.png" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="w-full justify-center flex">
        <ListCategory />
      </div>
    </header>
  );
}

export default DesktopMenu;
