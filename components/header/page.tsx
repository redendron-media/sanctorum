"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import ContactForm from "../contact-form/page";

interface NavbarScrollProps {
  toggleMenu: () => void;
  isScrolling?: boolean;
}

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const toggleMenu = () => {
    setNavbar((prevOpen) => !prevOpen);
  };

  const Navbar: React.FC<NavbarScrollProps> = ({ toggleMenu }) => {
    return (
      <nav className="relative top-0 w-full bg-sec flex justify-between lg:justify-normal gap-14 items-center py-4 px-7">
        <Link href={"./"}>
          <Image
            src={"/logo.svg"}
            width={52}
            height={52}
            alt="logo"
            className="lg:size-20"
          />
        </Link>
        <div className="hidden lg:flex flex-row justify-between w-full">
          <div className="flex flex-row gap-6">
            <Link className="mobile4" href={"/"}>
              Home
            </Link>
            <Link className="mobile4" href={"/about"}>
              About
            </Link>
          </div>
          <Dialog>
            <DialogTrigger className=" w-full font-im_fell bg-[#561C11] lg:w-fit hover:bg-[#561C11]/90 text-surface px-6 py-2 rounded-lg">
              <p className="font-im_fell text-base">Get in touch</p>
            </DialogTrigger>
            <DialogContent className="w-[80%] bg-surface">
              <DialogHeader>
                <DialogDescription />
                <DialogTitle className="text-center mobile3">
                  Contact Us
                </DialogTitle>
                <ContactForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <button className="flex lg:hidden" onClick={toggleMenu}>
          <Icon icon="ci:hamburger-md" className="text-primary text-4xl" />
        </button>
      </nav>
    );
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      {navbar && (
        <div className="fixed top-0 left-0 z-50 h-screen w-full bg-sec">
        <div className="py-4 px-7 flex flex-row justify-between">
        <Link href={"./"} onClick={toggleMenu}>
          <Image
            src={"/logo.svg"}
            width={52}
            height={52}
            alt="logo"
            className="lg:size-20"
          />
        </Link>
        <button className="flex lg:hidden pt-2" onClick={toggleMenu}>
          <Icon icon="basil:cross-solid" className="text-primary text-4xl" />
        </button>
        </div>

        <div className="flex flex-col items-center py-24 h-full gap-12">
        <Link onClick={toggleMenu} className="mobile4" href={"/"}>
              Home
            </Link>
            <Link onClick={toggleMenu} className="mobile4" href={"/about"}>
              About
            </Link>

            <Dialog>
            <DialogTrigger className=" w-fit font-im_fell bg-[#561C11] lg:w-fit hover:bg-[#561C11]/90 text-surface px-6 py-2 rounded-lg z-40">
              <p className="font-im_fell text-base">Get in touch</p>
            </DialogTrigger>
            <DialogContent className="w-[80%] bg-surface">
              <DialogHeader>
                <DialogDescription />
                <DialogTitle className="text-center mobile3">
                  Contact Us
                </DialogTitle>
                <ContactForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

       
        </div>)}
    </>
  );
};

export default Header;
