import React, { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  tel: z.string(),
  message: z.string(),
});

const Contact = () => {
  const { darkMode, language, data } = useAppContext();
  const { contact, social } = data;

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio-api-indol-three.vercel.app/api/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // Handle success
        setSubmitSuccess(true);
      } else {
        // Handle error
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`${darkMode ? "bg-darkmode-300" : "md:bg-lightmode-100"} mt-4
       md:mt-12 md:py-8`}
    >
      <div className="lg:container">
        <div className="grid h-full  grid-cols-1 md:grid-cols-2 py-8">
          <div
            className={`${
              darkMode ? "bg-darkmode-200 " : "bg-white  "
            }   lg:rounded-s-md  shadow-md `}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col  px-8 py-16 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="text-xl ">
                  {contact.name[language]}
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="py-2 px-1 rounded-sm w-full  bg-transparent border-[0.5px] border-lightmode-300"
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="text-xl ">
                  {contact.email[language]}
                </label>
                <input
                  type="text"
                  {...register("email")}
                  className="py-2 px-1 rounded-sm w-full  bg-transparent border-[0.5px] border-lightmode-300"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>
                <label htmlFor="tel" className="text-xl ">
                  {contact.tel[language]}
                </label>
                <input
                  type="tel"
                  {...register("tel")}
                  className="py-2 px-1 rounded-sm w-full  bg-transparent border-[0.5px] border-lightmode-300"
                />
                {errors.tel && <span>{errors.tel.message}</span>}
              </div>
              <div>
                <label htmlFor="email" className="text-xl ">
                  {contact.message[language]}
                </label>
                <textarea
                  {...register("message")}
                  className="py-2 px-1 rounded-sm w-full  bg-transparent border-[0.5px] h-[42px] border-lightmode-300"
                />
                {errors.message && <span>{errors.message.message}</span>}
              </div>
              <button
                type="submit"
                className={`${
                  darkMode
                    ? "hover:bg-[#D3E97A] hover:text-lightmode-300 "
                    : "hover:bg-[#FF6D1B] hover:text-white"
                } ease-in-out duration-300 text-xl md:text-2xl border-[0.5px] border-lightmode-300 py-4 mt-6 rounded-sm w-full`}
                disabled={loading || submitSuccess || submitError}
              >
                {loading
                  ? `${contact.loading[language]}`
                  : `${contact.button[language]}`}
              </button>
              {submitSuccess && (
                <p className="text-green-500">{contact.success[language]}</p>
              )}
              {submitError && (
                <p className="text-red-500">{contact.error[language]}</p>
              )}
            </form>
          </div>
          <div
            className={`${
              darkMode ? "bg-lightmode-300" : "bg-lightmode-300 text-white"
            } min-h-[250px] bg-cover flex flex-col items-center justify-center lg:rounded-e-md gap-y-4 md:gap-y-[50px] order-first md:order-2 shadow-md`}
          >
            <h1 className="text-6xl md:text-7xl text-center px-7 pt-4">
              {contact.title[language]}
            </h1>
            <div className="flex justify-center items-center gap-x-8 md:gap-x-4 pb-4">
              {/* <a href={social.github} target="_blank">
                <AiFillGithub
                  className="hover:scale-110 ease-in-out duration-300 "
                  size={30}
                  color="#fffff"
                />
              </a> */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
