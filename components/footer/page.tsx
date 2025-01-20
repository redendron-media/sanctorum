import React from "react";
import { SocialIcon } from "react-social-icons";
import { Icon } from "@iconify/react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-sec flex flex-col px-7 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:items-center w-full">
        <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="ic:round-phone" className="text-textdark-200 text-xl" />
          <p>+91 99070 61463</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Icon icon="ic:baseline-email" className="text-textdark-200 text-xl" />
          <p>hello@sanctorum.work</p>
        </div>
        </div>
     
        <div className="flex flex-row -ml-2">
          <SocialIcon
            target="_blank"
            bgColor="#D7CFBC"
            fgColor="#1C2515"
            url="https://www.instagram.com/sanctorum.work/"
          />
          <SocialIcon
            target="_blank"
            bgColor="#D7CFBC"
            fgColor="#1C2515"
            url="https://www.facebook.com/people/Sanctorum-Coworking/61568250360107/"
          />
          <SocialIcon
            target="_blank"
            bgColor="#D7CFBC"
            fgColor="#1C2515"
            url="https://www.linkedin.com/company/sanctorum-coworking/about/"
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 pt-12 items-center  justify-center">
        <p>Creative Credit:</p>
        <Link href={"/"}>Redendron Media</Link>
      </div>
    </footer>
  );
};

export default Footer;
