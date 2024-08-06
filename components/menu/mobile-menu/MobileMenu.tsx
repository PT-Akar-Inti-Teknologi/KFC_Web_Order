import React, { useState } from "react";
import Container from "../../container/Container";
import Logo from "../../logo/Logo";
import CartButton from "../../button/CartButton";
import { Drawer, DrawerContent } from "../../ui/drawer";
import TripleLine from "../../triple-line/TripleLine";
import Button from "../../button/Button";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import ToggleMenuButton from "./ToggleMenuButton";
import ListMenu from "./ListMenu";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex justify-center bg-primary-500 h-16 items-center xl:hidden">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              <ToggleMenuButton
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
              />
              <Logo variant="primary" />
            </div>
            <CartButton />
          </div>
        </Container>
      </header>

      <Drawer
        open={open}
        onOpenChange={setOpen}
        direction="bottom"
        modal={false}
        dismissible={false}
        onDrag={() => false}
        handleOnly
      >
        <DrawerContent className="h-[calc(100vh-128px)] px-4">
          <DialogTitle className="hidden">Menu</DialogTitle>
          <DialogDescription className="hidden">Menu</DialogDescription>
          <div className="flex flex-col justify-center items-center space-y-6">
            <TripleLine color="primary" size={"medium"} spacing={"medium"} />
            <Button className="w-full">Sign up / Sign in</Button>
            <ListMenu />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MobileMenu;
