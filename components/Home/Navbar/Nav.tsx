"use client";
import React, { useEffect, useState } from "react";
import { LuNetwork } from "react-icons/lu";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";


type props = {
  openNav?: () => void;
  
}
const Nav = ({openNav}:props) => {

  useEffect(() => {
    console.log("Screen height:", window.innerHeight, "px");
  }, []);

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-all duration-200 h-[12vh] fixed w-full z-50 ${
        navBg ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        {/* === Left side (Logo) === */}
        <div className="flex items-center sm:space-x-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center">
              <LuNetwork className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl hidden sm:block md:text-2xl text-cyan-800 font-bold">
              DevHire
            </span>
          </div>
        </div>

        {/* === Center Links === */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-lg font-medium hover:text-cyan-700 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* === Right Buttons === */}
        <div className="flex items-center space-x-4">
          <button className="bg-gray-100 px-8 py-2.5 rounded-lg hover:bg-gray-300 transition-all duration-200 cursor-pointer sm:text-sm ">
            Login
          </button>
          <button className="bg-cyan-700 text-white px-8 py-2.5 rounded-lg hover:bg-cyan-900 transition-all duration-300 cursor-pointer sm:block">
           Job Post
          </button>

          {/* <div className="w-10 h-10 bg-cyan-800 rounded-full flex items-center justify-center">
            <LuNetwork className="w-5 h-5 text-white" />
          </div> */}

          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black lg:hidden" onClick={openNav} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
