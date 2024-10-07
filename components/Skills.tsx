"use client";
import { skills, moreSkills } from "@/constants/index";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  icon: string;
  title: string;
  index: number;
}

const SkillsCard = ({ icon, title }: Props) => {
  return (
    <div className="md:w-[180px] w-full z-10  font-subtext rounded-lg bg-white p-6 px-3 flex flex-col justify-evenly gap-3 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-center items-center">
        <Image src={`${icon}`} alt="icon" width={50} height={50} />
      </div>
      <div>
        <h2 className="text-sm font-subtext text-black font-bold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="skills" className="max-w-[960px]   mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl font-header text-gradient font-bold">
          {" "}
          <span className="hidden  md:inline-flex w-20 md:w-60 mb-2 py-[.5px]  lgl:w-72 h-[.5px] bg-blue-gradient mr-6"></span>
          Technologies I use{" "}
          <span className="hidden md:inline-flex mb-2 w-20 py-[.5px] md:w-60 lgl:w-72 h-[.5px] bg-blue-gradient ml-6"></span>
        </h2>
      </div>
      <div className="grid  grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10 lgl:px-10">
        {skills.map((skill, index) => (
          <SkillsCard key={skill.id} {...skill} index={index} />
        ))}
      </div>

      {showMore && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid   grid-cols-2 md:grid-cols-4 items-center lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-10 lgl:px-10">
              {moreSkills.map((moreSkill, index) => (
                <SkillsCard key={moreSkill.id} {...moreSkill} index={index} />
              ))}
            </div>
          </motion.div>
        </>
      )}

      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 font-header h-12 rounded-md text-white bg-dimOrange text-[13px] border border-textGreen hover:bg-gold duration-300"
          >
            Explore all Skills
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
