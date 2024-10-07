"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaWolfPackBattalion,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "Offer", href: "#offer" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },

  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const pathname = usePathname();

  return (
    <div className="bg-dimDark h-[75px] sticky text-white sm:top-0 font-subtext  font-semibold    md:shadow-none z-50 ">
      {/* DESKTOP */}

      <div className=" hidden w-full h-full sm:flex justify-between items-stretch px-2 md:px-4 ">
        <div className="flex items-center">
          <Link href="/">
            <FaWolfPackBattalion className="w-[40px] h-[40px]" />
          </Link>
        </div>

        <div className=" flex h-full pt-[30px] ">
          <div className="flex gap-8 font-header xl:gap-[50px] sm:text-[14px] md:text-[14px] ">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "font-bold border-text-gradient border-b-2 "
                      : "font-semibold"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center  gap-1">
          <div className=" rounded-md  md:rounded-[10px] flex items-center text-[12px] md:text-[13px] px-4 md:px-3 justify-center py-2 md:py-[11px] sm:block">
            <Link href="https://github.com/odomaurice/">
              {" "}
              <FaGithub className="w-[25px] h-[25px]" />
            </Link>
          </div>

          <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
            <Link href="https://www.linkedin.com/in/%F0%9F%94%92odo-maurice-b99197198/">
              {" "}
              <FaLinkedin className="w-[25px] h-[25px]" />
            </Link>
          </div>
          <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
            <Link href="https://twitter.com/AlphaOf9ja/">
              {" "}
              <FaXTwitter className="w-[25px] h-[25px]" />
            </Link>
          </div>
          <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
            <Link href="https://discord.com/channels/@cyberSultan">
              {" "}
              <FaDiscord className="w-[25px] h-[25px]" />
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={` block sm:hidden  rounded-xl   fixed top-0 w-full z-[999]   py-6 animate-in fade-in zoom-in  ${
          menu ? " bg-dimDark py-2" : "bg-dimDark"
        } `}
      >
        <div className="flex justify-between  mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link  onClick={closeMenu} href="/">
              <FaWolfPackBattalion className="w-[40px] h-[40px]" />
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src={"/menu.svg"}
                alt="logo"
                width={100}
                height={100}
                className="cursor-pointer animate-in fade-in zoom-in w-[30px]"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] font-header xl:gap-[50px] text-[16px] flex-col select-none ">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      onClick={closeMenu}
                      href={link.href}
                      key={link.name}
                      className={
                        isActive ? "font-bold text-green-400 " : "font-semibold"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* <div className="flex items-center  gap-1">
            <div onClick={closeMenu} className=" rounded-md  md:rounded-[10px] flex items-center text-[12px] md:text-[13px] px-4 md:px-3 justify-center py-2 md:py-[11px] sm:block">
              <Link href="/login"> <FaGithub className="w-[25px] h-[25px]"/></Link>
            </div>

            <div onClick={closeMenu} className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
              <Link href="/register"> <Link href="/login"> <FaLinkedin className="w-[25px] h-[25px]"/></Link></Link>
            </div>

          </div> */}

              <div className="flex items-center  gap-1">
                <div className=" rounded-md  md:rounded-[10px] flex items-center text-[12px] md:text-[13px] px-4 md:px-3 justify-center py-2 md:py-[11px] sm:block">
                  <Link href="https://github.com/odomaurice/">
                    {" "}
                    <FaGithub className="w-[25px] h-[25px]" />
                  </Link>
                </div>

                <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
                  <Link href="https://www.linkedin.com/in/%F0%9F%94%92odo-maurice-b99197198/">
                    {" "}
                    <FaLinkedin className="w-[25px] h-[25px]" />
                  </Link>
                </div>
                <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
                  <Link href="https://twitter.com/AlphaOf9ja/">
                    {" "}
                    <FaXTwitter className="w-[25px] h-[25px]" />
                  </Link>
                </div>
                <div className=" flex rounded-[10px] justify-center items-center text-[12px]  md:text-[14px] md:px-3 px-4 py-2 md:py-[11px] sm:block">
                  <Link href="https://discord.com/channels/@cyberSultan">
                    {" "}
                    <FaDiscord className="w-[25px] h-[25px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
