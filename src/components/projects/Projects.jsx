import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { BsArrowUpRight } from "react-icons/bs";
import { InView } from "react-intersection-observer";

const Projects = () => {
  const { language, data, darkMode } = useAppContext();
  const { projects } = data;
  return (
    <section
      className="container h-full py-6 md:py-28 overflow-hidden"
      id="projects"
    >
      <InView>
        {({ inView, ref }) => (
          <h1
            ref={ref}
            className={`font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-8xl w-[250px] md:w-full ${
              inView ? "animate-right" : ""
            }`}
          >
            {projects.text[language]}
          </h1>
        )}
      </InView>
      <p className="text-lg md:text-2xl  mb-6 md:mb-20">
        {projects.desc[language]}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-20 justify-center items-center">
        {projects.projects.map((project) => (
          <>
            <div
              className={`${
                darkMode
                  ? "bg-lightmode-500 text-white"
                  : "bg-lightmode-200 text-white"
              } flex flex-col py-6 gap-y-6 px-4 justify-around items-center rounded-md lg:h-[672px] xl:h-[600px]`}
            >
              <h4 className="text-lg md:text-2xl bg-[#6A6A6A]  px-10 py-2 rounded-full shadow-lg">
                {project.company}
              </h4>
              <img src={project.image} width={400} alt="" />
            </div>
            <div className="  flex flex-col justify-between lg:h-[672px] xl:h-[600px] mb-6 md:mb-20 lg:mb-0">
              <div className="flex flex-col gap-y-2 mb-2">
                <InView>
                  {({ inView, ref }) => (
                    <a href={project.url} target="_blank">
                      <h3
                        ref={ref}
                        className={`${
                          darkMode
                            ? "text-[#D3E97A] border-[#D3E97A]"
                            : "text-[#FF6D1B] border-[#FF6D1B]"
                        } text-xl flex items-center gap-x-3 border-b-2 w-[150px] ${
                          inView ? "animate-scale" : ""
                        }`}
                      >
                        {projects.link[language]}
                        <BsArrowUpRight
                          size={20}
                          color={darkMode ? "#D3E97A" : "#FF6D1B"}
                        />
                      </h3>
                    </a>
                  )}
                </InView>
                <h4 className="text-2xl md:text-3xl">
                  {project.title[language]}
                </h4>
                <p className="md:text-justify ">{project.desc[language]}</p>
              </div>
              <div>
                <h3 className="text-xl">{projects.information[language]}</h3>
                <div className="flex  w-full border-b-[1px] my-3 py-2 ">
                  <h4 className="w-[30%]  font-semibold">
                    {projects.year[language]}
                  </h4>
                  <h4 className="w-[70%]">{project.year}</h4>
                </div>
                <div className="flex  w-full border-b-[1px] my-3 py-2 ">
                  <h4 className="w-[30%] font-semibold">
                    {projects.function[language]}
                  </h4>
                  <h4 className="w-[70%] ">{project.role[language]}</h4>
                </div>
                <div className="flex  w-full border-b-[1px] my-3 py-2 ">
                  <h4 className="w-[30%] font-semibold">
                    {projects.tech[language]}
                  </h4>
                  <h4 className=" w-[70%] ">{project.tech[language]}</h4>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
