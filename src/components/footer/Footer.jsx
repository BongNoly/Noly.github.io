import React from "react";
import { FaFacebookMessenger, FaTelegramPlane } from "react-icons/fa";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="https://t.me/Noly168"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://web.facebook.com/messages/t/100063506199968"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaFacebookMessenger className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Messenger</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://instagram.com/noly_168?igshid=OGQ5ZDc2ODk2ZA=="
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span>2023 Dev AlphaSpace </span> All rights
          reserved
          <a href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
