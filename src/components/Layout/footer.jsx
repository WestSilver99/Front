import React from "react";
import { RxNotionLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white text-sm border-t-[1px] border-[#C2C2C2]">
      <div className="w-full max-w-screen-xl mx-auto p-5 ">
        <div>
          <span className="block text-center text-black mb-10">
            © {currentYear}{" "}
            <a
              href="https://leafy-tulumba-aa5ae3.netlify.app/"
              className="hover:underline"
            >
              SANTA™
            </a>
            . All Rights Reserved.
          </span>

          <span className="block text-center text-black  ">
            <strong>가톨릭대학교 멋쟁이사자처럼 Rudolph</strong>
          </span>

          <span className="flex justify-center items-center text-center text-black text-xl">
            <a
              href="https://sleepy-rosehip-c39.notion.site/SANTA-API-abe876a4973340abb5f9cec08942c53e?pvs=4"
              target="_blank"
              rel="noreferrer"
            >
              <RxNotionLogo size={24} />
            </a>{" "}
            |{" "}
            <a href="https://gmail.com" target="_blank" rel="noreferrer">
              <BiLogoGmail color="red" size={24} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
