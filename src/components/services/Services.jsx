import React from "react";
import { useAppContext } from "../../hooks/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { InView } from "react-intersection-observer";

import Card from "../Card";
const Services = () => {
  const { language, data } = useAppContext();
  const { services, projects } = data;
  return (
    <section
      className="container flex flex-col gap-y-6 md:gap-y-14"
      id="services"
    >
      <InView>
        {({ inView, ref }) => (
          <h1
            ref={ref}
            className={`${
              inView ? "animate-left" : ""
            } text-center font-semibold text-5xl md:text-7xl lg:text-8xl xl:text-8xl `}
          >
            {projects.text[language]}
          </h1>
        )}
      </InView>

        <div className="block md:flex justify-between">
            <img src="/images/projects/Anfahrtsvideo_Auto.gif" alt="" className="w-[500px] mb-5 md:mb-0" />
            <img src="/images/projects/Beratung_&_Förderung.gif" alt="" className="w-[500px]" />
        </div>
        <div className="block md:flex justify-between">
            <img src="/images/projects/Meine-Region-v17.gif" alt="" className="w-[500px] mb-5 md:mb-0" />
            <img src="/images/projects/schaufenster-arbeitsmarkt.gif" alt="" className="w-[500px]" />
        </div>
        <div className="block md:flex justify-between">
            <img src="/images/projects/Stadternte-Wien-reel-v2.gif" alt="" className="mx-auto md:mx-0" />
            <div className="flex flex-col gap-y-5 mt-5 md:mt-0">
            <img src="/images/projects/tigre2.gif" alt="" />
            <img src="/images/projects/varal.gif" alt="" />
            </div>
        </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {services.services.map((service, index) => (
          <SwiperSlide key={index}>
            <Card  img={service.image} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default Services;
