"use client";
import { projects } from "@/constants/projects";
import Image from "next/image";
import { TbWaveSawTool } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { LuLink } from "react-icons/lu";

interface Props {
  icon: string;
  title: string;
  githubLink: string;
  webLink: string;
  index: number;
}

const ProjectCard = ({ icon, title, githubLink, webLink }: Props) => {
  return (
    <div className="relative w-full z-10  font-header rounded-lg bg-white shadow-xl p-6 px-3 flex flex-col justify-evenly gap-3 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between">
        <div className="flex justify-start h-[40px] w-[40px] place-items-center  rounded-full">
          <Image
            src={`${icon}`}
            alt="icon"
            width={200}
            height={200}
            className="w-[30px] mx-auto h-[30px] "
          />
        </div>
        <TbWaveSawTool className="text-black text-[20px]" />
      </div>

      <div>
        <h2 className="text-[16px] mb-3 font-header text-black font-bold tracking-wide group-hover:text-textGreen">
          {title}
        </h2>
        <Link href={githubLink} className="bg-dimDark rounded-md p-[5px] my-3 ">
          <p className=" inline text-[10px] text-stone-100">
            {" "}
            <FaGithub className="inline text-[14px]" />{" "}
            {githubLink.slice(0, 40)}
          </p>
        </Link>
        <Link
          href={webLink}
          className="bg-dimDark flex rounded-md p-[5px] my-3 "
        >
          <p className=" inline text-[10px] text-stone-100">
            {" "}
            <LuLink className="inline text-[14px]" /> {webLink.slice(0, 30)}
          </p>
        </Link>
      </div>
    </div>
  );
};

const Projects = () => {
  //const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="projects"
      className="max-w-[1000px] relative   mx-auto px-4  py-16"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[60%] rounded-full blue__gradient bottom-30" />
      <div className="w-full flex flex-col mb-16 items-center">
        <h2 className="text-2xl font-header text-gradient font-bold">
          {" "}
          <span className="hidden  md:inline-flex w-20 md:w-60 mb-2 py-[.5px]  lgl:w-72 h-[.5px] bg-blue-gradient mr-6"></span>
          Projects{" "}
          <span className="hidden md:inline-flex mb-2 w-20 py-[.5px] md:w-60 lgl:w-72 h-[.5px] bg-blue-gradient ml-6"></span>
        </h2>
      </div>

      <div className="grid relative  grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 items-center lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>

      {/* {showMore && (
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
                  <SkillsCard
                    key={moreSkill.id}
                    {...moreSkill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )} */}

      {/* <div className="mt-12 flex items-center justify-center">
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
        </div> */}
    </div>
  );
};

export default Projects;
