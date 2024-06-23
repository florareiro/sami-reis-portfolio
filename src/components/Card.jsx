import React from "react";
import { useAppContext } from "../hooks/AppContext";

const Card = ({ text, img }) => {
  const { darkMode } = useAppContext();
  return (
    <div
      className={`${
        darkMode ? "bg-lightmode-500 text-white" : "bg-lightmode-300 text-white"
      } shadow-lg rounded-md md:w-[500px] md:h-[280px]`}
    >
      
      <img src={img} alt="" className="bg-cover " />
    
      {/* <div className="h-[60px] flex justify-center items-center">
        <h3 className="font-semibold text-3xl lg:text-3xl ">{text}</h3>
      </div> */}
    </div>
  );
};

export default Card;
