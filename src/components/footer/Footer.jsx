import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { useAppContext } from "../../hooks/AppContext";

const Footer = () => {
  const { darkMode, data } = useAppContext();
  const { social } = data;
  return (
    <footer
      className={`w-full h-[80px] ${
        darkMode ? "bg-darkmode-200 dark-text" : "bg-white light-text"
      } flex justify-center items-center border-t-[0.01px] border-lightmode-200`}
    >
      <div className="container">
        <div className=" md:flex justify-between items-center">
          <div className="flex justify-center gap-x-4 lg:gap-x-8 items-center">
            <a href={social.github} target="_blank">
              <AiFillGithub
                className="hover:scale-110 ease-in-out duration-300 "
                size={30}
                color="#fffff"
              />
            </a>
            <a href={social.linkdin} target="_blank">
              <BiLogoLinkedin
                className="hover:scale-110 ease-in-out duration-300 "
                size={30}
                color="#fffff"
              />
            </a>
            <a href={social.mail} target="_blank">
              <AiOutlineMail
                className="hover:scale-110 ease-in-out duration-300 "
                size={30}
                color="#fffff"
              />
            </a>
            <a href={social.wpp} target="_blank">
              <BsWhatsapp
                className="hover:scale-110 ease-in-out duration-300 "
                size={25}
                color="#fffff"
              />
            </a>
          </div>
          <h2 className="md:text-xl flex justify-center  items-center">
            © 2024 Cecília Flora
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
