import React from "react";

const UnderHero = () => {
  return (
    <section id="offer" className=" overflow-hidden mt-20">
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-2xl font-header text-gradient font-bold">
          {" "}
          <span className="hidden z-10  md:inline-flex w-20 md:w-60 mb-2 py-[.5px]  lgl:w-72 h-[.5px] bg-blue-gradient mr-6"></span>
          What I Offer{" "}
          <span className="hidden md:inline-flex mb-2 w-20 py-[.5px] md:w-60 lgl:w-72 h-[.5px] bg-blue-gradient ml-6"></span>
        </h2>
      </div>
      {/* </Container> */}
      <div className="max-w-[960px]  mx-auto grid grid-cols-1 md:space-x-3 font-subtext md:grid-cols-3 gap-4 overflow-hidden ">
        {/* <div className="absolute z-[0] w-[60%] h-[80%] right-[50%] rounded-full blue__gradient bottom-30" /> */}

        <div className=" z-10 md:bg-transparent w-full md:w-5/6 bg-stone-100 hover:bg-black-gradient  text-black md:text-white py-3 px-3 rounded-xl">
          {/* <Image
            alt=""
            src={"/offer-1.svg"}
            width={200}
            height={200}
            className="w-[50%] mx-auto"
          /> */}
          <h3 className="text-[20px] my-3 font-header font-bold">
            Web Development
          </h3>

          <p className="mb-3 mt-1 text-[14px]">
            I build astonishing, scalable, and marketable websites, with great
            and world-class user interfaces bearing in mind, the experience of
            the user. I work with you to achieve customer satisfaction.
          </p>
        </div>
        <div className="md:bg-transparent z-10 w-full md:w-5/6 bg-stone-100 hover:bg-black-gradient  text-black md:text-white py-3 px-3 rounded-xl">
          {/* <Image
            alt=""
            src={"/offer-2.svg"}
            width={200}
            height={200}
            className="w-[50%] mx-auto"
          /> */}
          <h3 className="text-[20px] my-3 font-header font-bold">Web Tutor</h3>

          <p className="mb-3 mt-1 text-[14px]">
            I teach web development, with 3 years experience and counting, I
            onboard you into tech with the recent and in-demand skills.
          </p>
        </div>
        <div className="z-10 md:bg-transparent w-full md:w-5/6 bg-stone-100 hover:bg-black-gradient  text-black md:text-white py-3 px-3 rounded-xl">
          {/* <Image
            alt=""
            src={"/offer-3.svg"}
            width={200}
            height={200}
            className="w-[50%] mx-auto"
          /> */}
          <h3 className="text-[20px] my-3 font-header font-bold">
            SOC Analysis
          </h3>

          <p className="mb-3 mt-1 text-[14px]">
            In a highly technical, global village like ours, where technology
            has almost taken over, there are possibilities and scenarios of
            cyber attacks, I help secure your websites and domains through best
            practices and platforms with my knowlege in security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnderHero;
