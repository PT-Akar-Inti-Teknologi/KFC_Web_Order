import React, { PropsWithChildren, useState } from "react";
import Container from "../../container/Container";
import MenuButton from "../../button/MenuButton";
import Logo from "../../logo/Logo";
import CartButton from "../../button/CartButton";
import { Drawer, DrawerContent } from "../../ui/drawer";
import CloseButton from "../../button/CloseButton";
import TripleLine from "../../triple-line/TripleLine";
import { SignUpSignIn } from "../../button/Button.stories";
import SignUpSignInButton from "../../button/SignUpSignInButton";
import Button from "../../button/Button";


function MenuContainer({ children }: PropsWithChildren) {
    return <ul className="flex w-full">
        {children}
    </ul>
}

function MenuItem() {
    return (
        <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">
            <div>Shop</div>
        </li>
    )
}

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex justify-center bg-primary-500 h-16 items-center">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              {open ? (
                <CloseButton onClick={() => setOpen(false)} />
              ) : (
                <MenuButton onClick={() => setOpen(true)} />
              )}
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
        <DrawerContent className="h-[calc(100vh-128px)] px-4"  >
          <div className="flex flex-col justify-center items-center space-y-6">
            <TripleLine color="primary" size={"medium"} spacing={"medium"} />
            <Button className="w-full">
                Sign up / Sign in
            </Button>

            <ul className="w-full">
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">HOME</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">ORDER</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">KIDS</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">AUTOMOTIVE</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">CORPORATE</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">EVENT</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">STORE</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">CAREER</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">CONTACT US</li>
                <li className="font-national2condensed text-xl font-bold text-neutral-900 p-3 flex hover:text-primary-500 hover:bg-primary-25">TERMS & CONDITIONS</li>
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default HeaderMobile;
