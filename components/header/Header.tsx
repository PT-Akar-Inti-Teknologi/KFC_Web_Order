"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/images/kfc_logo_white.png";
import Link from "next/link";
import LocalSwitcher from "../local-switcher/LocalSwitcher";

function Header() {
  return (
    <header className="w-full bg-neutral-900">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center h-[72px]">
          <Link href={"/"}>
            <Image src={logo} alt="KFC" width={121} height={30} />
          </Link>

          <LocalSwitcher/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
