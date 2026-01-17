"use client";

import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="fixed top-0 righ-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt=" " className="w-full"></Image>
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <p
            className="w-28 cursor-pointer mr-14 font-sans font-bold text-2xl text-black dark:text-white"
            alt=" "
          >
            Portfolio
          </p>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScrolled
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a className="font-Ovo" href="/#top">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#about">
              About Me
            </a>
          </li>
          <li className="relative group">
            <a
              href={`${pathname === "/" ? "#services" : pathname}`}
              className="font-Ovo flex items-center gap-2 cursor-pointer"
            >
              Services {pathname !== "/" && <FaAngleDown />}
            </a>

            {pathname !== "/" && (
              <div className="absolute left-0 top-full mt-1 w-48 bg-white dark:bg-darkTheme border border-gray-300 dark:border-white/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/chatbots">AI & Chatbots</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/backend">Backend</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/frontend">Frontend</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/ecommerce">E-commerce</a>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="relative group">
            <a
              href={`${pathname === "/" ? "#work" : pathname}`}
              className="font-Ovo flex items-center gap-2 cursor-pointer"
            >
              My Work {pathname !== "/" && <FaAngleDown />}
            </a>

            {pathname !== "/" && (
              <div className="absolute left-0 top-full mt-1 w-48 bg-white dark:bg-darkTheme border border-gray-300 dark:border-white/20 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <a href="/projects">View All Projects</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <a className="font-Ovo" href="/#contact">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=" "
              className="w-6"
            ></Image>
          </button> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            ></Image>
          </a>

          <button className="block md:hidden ml-3" onClick={openSideMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=" "
              className="w-6"
            ></Image>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top- bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute top-6 right-6" onClick={closeSideMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <a className="font-Ovo" href="#top" onClick={closeSideMenu}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about" onClick={closeSideMenu}>
              About Me
            </a>
          </li>
          <li>
            <button
              onClick={() => setShowMobileDropdown((prev) => !prev)}
              className="font-Ovo flex items-center justify-between w-full"
            >
              Services{" "}
              <FaAngleDown
                className={`transition-transform duration-300 ${
                  showMobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {showMobileDropdown && (
                <motion.ul
                  className="ml-4 mt-2 flex flex-col gap-2 text-sm overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <li>
                    <a href="/chatbots" onClick={closeSideMenu}>
                      - AI & Chatbots
                    </a>
                  </li>
                  <li>
                    <a href="/backend" onClick={closeSideMenu}>
                      - Backend
                    </a>
                  </li>
                  <li>
                    <a href="/frontend" onClick={closeSideMenu}>
                      - Frontend
                    </a>
                  </li>
                  <li>
                    <a href="/ecommerce" onClick={closeSideMenu}>
                      - E-commerce
                    </a>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <a className="font-Ovo" href="#work" onClick={closeSideMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/projects" onClick={closeSideMenu}>
              projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact" onClick={closeSideMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
