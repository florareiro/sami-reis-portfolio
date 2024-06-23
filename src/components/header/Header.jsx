import React, { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
const Header = () => {
  const { darkMode, language, data } = useAppContext();
  const { header, social } = data;
  const [showMenu, setShowMenu] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const toggleMenu = () => {
    if (showMenu) {
      setAnimationClass("slideOut");
      setTimeout(() => setShowMenu(false), 300); // Wait for animation to complete before closing
    } else {
      setShowMenu(true);
      setAnimationClass("slideIn");
    }
  };

  return (
    <header
      className={`${
        darkMode ? "bg-darkmode-200 dark-text" : "bg-white"
      } h-[80px] flex items-center fixed top-0 z-20 w-full shadow-lg`}
    >
      <nav className="container flex justify-between text-2xl lg:text-3xl">
        <div className="w-full hidden md:flex items-center">
          <a href={"#"}>
            <h1 className="font-thin ">
             Samanta {""}
              <span
                className={`${
                  darkMode ? "text-[#D3E97A]" : "text-[#FF6D1B]"
                } font-semibold`}
              >
                Reis
              </span>
            </h1>
          </a>
        </div>
        <div className="flex gap-x-4 items-center justify-start md:justify-center w-full">
          <ThemeSwitcher />
          {/* <LanguageSwitcher /> */}
        </div>
        <div className=""></div>
        <div className="w-full flex justify-end">
          {/* Web Menu */}
          <ul className="hidden lg:flex gap-x-6">
            {header.menu[language].map((menuItem, index) => (
              <a href={header.menu.links[index]}>
                <li
                  className={`hover:border-b-2 hover:scale-110 hover:skew-x-2 ${
                    darkMode
                      ? "hover:text-[#D3E97A] hover:border-[#D3E97A]"
                      : "hover:text-[#FF6D1B] hover:border-[#FF6D1B]"
                  } ease-in-out duration-300`}
                  key={index}
                >
                  {menuItem}
                </li>
              </a>
            ))}
          </ul>
          {/* Web Menu */}
          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center">
            {/* Toggle between Menu and Close icons */}
            <button onClick={toggleMenu}>
              {showMenu ? <RiCloseLine size={40} /> : <RiMenu3Line size={35} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {showMenu && (
            <div
              className={`${
                darkMode ? "bg-darkmode-200 dark-text" : "bg-gray-50 light-text"
              }  shadow-s-xl lg:hidden absolute top-[80px] h-screen w-[65%] md:w-[50%] right-0 flex flex-col  py-[150px]  items-center  ${animationClass}`}
            >
              <div className="container">
                <ul className="md:container flex flex-col  items-center gap-y-8 fade-in">
                  {header.menu[language].map((menuItem, index) => (
                    <a href={header.menu.links[index]}>
                      <li
                        key={index}
                        className={`hover:border-b-2 hover:scale-110 hover:skew-x-2 ${
                          darkMode
                            ? "hover:text-[#D3E97A] hover:border-[#D3E97A]"
                            : "hover:text-[#FF6D1B] hover:border-[#FF6D1B]"
                        } ease-in-out duration-300`}
                      >
                        <span className="text-5xl md:text-6xl">{menuItem}</span>
                      </li>
                    </a>
                  ))}
                </ul>
                <div className="flex justify-center items-center gap-x-4  mt-[100px]">
                  {/* <a href={social.github} target="_blank">
                    <AiFillGithub
                      className="hover:scale-110 ease-in-out duration-300 "
                      size={25}
                      color="#fffff"
                    />
                  </a> */}
                  <a href={social.linkdin} target="_blank">
                    <BiLogoLinkedin
                      className="hover:scale-110 ease-in-out duration-300 "
                      size={25}
                      color="#fffff"
                    />
                  </a>
                  <a href={social.mail} target="_blank">
                    <AiOutlineMail
                      className="hover:scale-110 ease-in-out duration-300 "
                      size={25}
                      color="#fffff"
                    />
                  </a>
                  <a href={social.wpp} target="_blank">
                    <BsWhatsapp
                      className="hover:scale-110 ease-in-out duration-300 "
                      size={20}
                      color="#fffff"
                    />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
