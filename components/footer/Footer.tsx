import React from "react";
import Container from "../container/Container";
import Link from "next/link";
import AppStoreIcon from "../icons/icon-collections/common-icons/AppStoreIcon";
import PlayStoreIcon from "../icons/icon-collections/common-icons/PlayStoreIcon";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { cn } from "@/lib/utils";

const theme = {
  title: "font-bold font-national2condensed text-[28px]",
  subtitle: "font-bold font-national2condensed text-[20px]",
  link: "text-neutral-100 font-bold duration-300 hover:text-white",
  socialLink:
    "w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-white duration-300",
};

function Footer() {
  return (
    <footer className="bg-neutral-900 min-h-[418px] py-8 md:py-16 text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 border-b border-neutral-100 pb-6 md:pb-9 mb-6 md:gap-4">
          <div className="col-span-2 mb-10 md:col-span-6 lg:mb-0 lg:col-span-3">
            <h3 className={cn([theme.title, "mb-4"])}>
              PT FAST FOOD INDONESIA TBK
            </h3>
            <p className="text-neutral-100 text-sm mb-4">
              Alamat : Jl. Let. Jend. Haryono M.T. Kav.7 Jakarta 12810,
              Indonesia
            </p>

            <div className="flex flex-col space-y-2 text-sm text-neutral-100">
              <p>Operating hours: 24 Hours</p>
              <p>Telephone: 14022</p>
              <p>
                Fax: <Link href={"tel:+6221 79183947"}>(+6221) 79183947</Link>
              </p>
              <p>
                E-mail:{" "}
                <Link href="mailto:info@kfcindonesia.com">
                  info@kfcindonesia.com
                </Link>
              </p>
            </div>
          </div>

          <div className="mb-10 md:mb-0">
            <h4 className={cn([theme.subtitle, "mb-4"])}>LAYANAN</h4>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link className={theme.link} href={"/delivery"}>
                  Delivery
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/dine-in"}>
                  Dine-in
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/take-away"}>
                  Take Away
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/drive-thru"}>
                  Drive-Thru
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-10 md:mb-0 md:col-span-2 lg:col-span-1">
            <h4 className={cn([theme.subtitle, "mb-4"])}>INFO</h4>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link className={theme.link} href={"/terms-and-condition"}>
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/privacy-policy"}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/contact-us"}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className={theme.link} href={"/about-us"}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-bold font-national2condensed text-[20px] mb-4">
              DOWNLOAD APP
            </h4>
            <div className="flex space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2">
              <Link href={"/app-store"}>
                <AppStoreIcon />
              </Link>

              <Link href={"/play-store"}>
                <PlayStoreIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-6 md:flex-row md:space-y-0 justify-between md:items-center">
          <p className="text-neutral-100 text-sm">
            © 2023 KFCKU.com by PT FASTFOOD Indonesia Tbk. | All rights
            reserved.
          </p>

          <div className="flex space-x-[18px]">
            <Link href={"/facebook"} className={theme.socialLink}>
              <TfiFacebook />
            </Link>
            <Link href={"/facebook"} className={theme.socialLink}>
              <FaInstagram />
            </Link>
            <Link href={"/facebook"} className={theme.socialLink}>
              <TbBrandYoutubeFilled />
            </Link>
            <Link href={"/facebook"} className={theme.socialLink}>
              <BsTwitterX />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
