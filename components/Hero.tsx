import React from "react";
import { Button } from "@/components/ui/button";
import { FaCirclePlay } from "react-icons/fa6";
import Search from "./Search";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[60%] rounded-full blue__gradient bottom-30" />

      <div className="flex flex-col z-30 w-full md:text-center">
        <h1 className="md:text-[60px] leading-[50px] mt-12 md:leading-[80px] text-4xl md:max-w-[82%] w-full font-bold md:mx-auto  font-header text-gradient">
          Rapidly build your websites with modern tools and technologies.
        </h1>
        <p className=" md:max-w-[60%] w-full font-semibold mt-3 md:mx-auto z-10 font-header text-white">
          Let us build your{" "}
          <span className="font-subtext text-gradient mx-2">
            scalable, user-friendly, aesthetic and user-appealing
          </span>{" "}
          websites. Taking into cognisance, industry standards and requirements
        </p>

        <div className="my-3 sm:flex sm:mx-auto z-10 space-x-6">
          <Link href="/resume.pdf">
            <Button className="md:py-4 py-6 mt-6 px-6 w-full font-header font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none">
              Resume
              <FaCirclePlay className="ml-1" />
            </Button>
          </Link>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default Hero;
