"use client";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null); // Correct type for form ref

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      toast.error("Form is not loaded correctly.");
      return;
    }

    const name = form.current.querySelector(
      'input[name="name"]'
    ) as HTMLInputElement;
    const email = form.current.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    const message = form.current.querySelector(
      'textarea[name="message"]'
    ) as HTMLTextAreaElement;

    if (!name.value || !email.value || !message.value) {
      toast.error("Please fill all the required fields.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        () => {
          toast.success(
            "Your Message was sent successfully, I'll keep in touch shortly."
          );
          (e.target as HTMLFormElement).reset(); // Reset form after submission
        },
        () => {
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <section>
      <div
        id="contact"
        className="sm:px-16 px-3 flex justify-center items-center font-header min-h-screen"
      >
        <div className="xl:max-w-[1280px] w-full px-[2px] z-[5]">
          <h1 className="text-gradient text-center font-bold text-[25px]">
            The world at your fingertips
            <span className="text-secondary">!</span>
          </h1>

          <form ref={form} onSubmit={sendMail} className="">
            <div className="py-[10px]">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="w-[100%] rounded-[5px] outline-none p-[10px] bg-transparent text-white border border-gray-700"
                required
              />
            </div>

            <div className="py-[10px]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-[100%] rounded-[5px] outline-none p-[10px] bg-transparent text-white border border-gray-700"
                required
              />
            </div>

            <div className="py-[10px]">
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                placeholder="Your phone Number"
                className="w-[100%] rounded-[5px] outline-none p-[10px] bg-transparent text-white border border-gray-700"
              />
            </div>

            <div className="py-[10px]">
              <textarea
                cols={30}
                rows={10}
                id="message"
                name="message"
                placeholder="Your message"
                className="w-[100%] rounded-[5px] outline-none p-[5px] bg-transparent text-white border border-gray-700"
                required
              />
            </div>

            <div className="pt-[20px]">
              <Button
                type="submit"
                className={`py-2 px-4 font-poppins font-bold text-[18px] text-primary w-[100%] bg-blue-gradient hover:bg-secondary rounded-[10px] mr-3 outline-none`}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        <Image
          src={"/globe.svg"}
          alt="auth_img"
          width={600}
          height={600}
          className="md:block hidden"
        />
      </div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        theme="light"
        autoClose={3000}
      />
    </section>
  );
};

export default Contact;
