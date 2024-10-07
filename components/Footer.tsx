"use client";

import { footerLinks, socialMedia } from "@/constants/index";

import Link from "next/link";

const Footer = () => (
  <section
    className={`flex justify-center font-subtext items-center sm:py-16 py-6 mt-12 flex-col`}
  >
    <div
      className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}
    >
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mb-8 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-header font-medium text-[16px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="text-sm ">
        © Alphacodez Network. {new Date().getFullYear()}
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((item, index) => (
          <li key={item.id} className="list-none">
            <Link href={item.link} className="hover:text-neutral-200">
              <item.icon
                className={`w-[21px] h-[21px] text-white object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </Link>
          </li>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
