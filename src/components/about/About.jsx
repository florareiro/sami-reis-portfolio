import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { InView } from "react-intersection-observer";
const About = () => {
  const { darkMode, language, data } = useAppContext();
  const { about, hero, services } = data;
  return (
    <>
      <section id="about" className=" container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-28 h-full md:py-12 lg:py-20">
          {/* mobile */}
          <div className="flex flex-col md:hidden items-center">
            <h1
              className={`
              w-full font-semibold  text-center text-6xl py-6`}
            >
              {about.text[language]}
            </h1>
            <img src="/images/hero/eu-v2.png" alt="" />
            <p className="my-4 text-xl">{hero.text[language]}</p>
          </div>
          {/* mobile */}

          {/* tablet   */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center justify-center gap-x-12  lg:hidden">
              <img
                src="/images/hero/eu-v2.png"
                className="w-[50%] h-full"
                alt=""
              />

              <h1
                className={`
              font-semibold  text-8xl py-6`}
              >
                {about.text[language]}
              </h1>
            </div>
            <p className="pt-6 text-xl ">{hero.text[language]}</p>
          </div>
          {/* tablet   */}

          {/* desktop  */}
          <div className="hidden lg:block">
            <div className="flex gap-x-24">
              <img src="/images/hero/eu-v2.png" className="h-full" alt="" />
              <div className="flex flex-col justify-center">
                <h1 className={`w-[410px] font-semibold  text-7xl xl:text-8xl`}>
                  {about.text[language]}
                </h1>
                <p className="text-xl">{hero.text[language]}</p>
              </div>
            </div>
          </div>

          {/* desktop  */}

          {/* <div className="h-[280px] md:h-[600px] flex items-center">
            <div className="bg-me bg-contain bg-no-repeat h-full lg:h-[700px] w-full mx-3">
              <p className="text-xl">{hero.text[language]}</p>
            </div>
            <div className="hidden  md:flex lg:hidden w-full justify-center items-center">
              <h1 className="font-semibold w-[200px] text-6xl py-6">
                {about.text[language]}
              </h1>
              <p className="text-xl">{hero.text[language]}</p>
            </div>
          </div> */}
          {/* 
          <div className="hidden md:flex h-full flex-col justify-between ">
            <h1
              className={`md:w-[200px] lg:w-[290px] md:hidden lg:block font-semibold text-6xl `}
            >
              {about.text[language]}
            </h1>
            <p className="text-xl">{hero.text[language]}</p>
          </div> */}
        </div>
      </section>

      <div className="container flex flex-col justify-center items-center text-start md:text-center mb-8 md:mb-20 gap-y-4">
        <InView>
          {({ inView, ref }) => (
            <>
              <h1
                ref={ref}
                className={`${
                  inView ? "animate-left" : ""
                } text-center font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-8xl `}
              >
                {services.text[language]}
              </h1>
              <h2
                ref={ref}
                className={`${
                  darkMode ? "bg-lightmode-500" : "bg-lightmode-200"
                } w-full h-[90px] lg:h-[104px] flex md:justify-center items-center text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                  inView ? "animate-about1" : ""
                }`}
              >
                {about.desc[0][language]}
              </h2>
            </>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`${
                darkMode
                  ? "bg-lightmode-500 text-white"
                  : "bg-[#FF6D1B] text-white"
              } w-full   flex  md:justify-center items-center h-[90px]  lg:h-[104px] text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                inView ? "animate-about2" : ""
              }`}
            >
              {about.desc[1][language]}
            </h2>
          )}
        </InView>
        <InView>
          {({ inView, ref }) => (
            <h2
              ref={ref}
              className={`${
                darkMode ? "bg-lightmode-500" : "bg-lightmode-500 text-white"
              } w-full  flex md:justify-center items-center h-[90px]  lg:h-[104px] text-xl md:text-3xl lg:text-4xl py-4 px-4 rounded-md ${
                inView ? "animate-about1" : ""
              }`}
            >
              {about.desc[2][language]}
            </h2>
          )}
        </InView>
      </div>
    </>
  );
};

export default About;
