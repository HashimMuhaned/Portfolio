"use client";

import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setShowMobileDropdown(false); // optional but recommended
  };

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
        <a href="/#top">
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
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt=""></Image>
          </a>

          <button
            className="block md:hidden ml-3"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Image src={assets.menu_black} alt=" " className="w-6"></Image>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top- bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white">
          <div className="absolute top-6 right-6" onClick={closeMobileMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <a className="font-Ovo" href="/#top" onClick={closeMobileMenu}>
              {" "}
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#about" onClick={closeMobileMenu}>
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
              {mobileMenuOpen && (
                <motion.div
                  className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-darkHover shadow-lg md:hidden"
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-center px-6 py-4 border-b dark:border-white/20">
                    <p className="font-bold text-xl">Menu</p>
                    <button onClick={closeMobileMenu}>
                      <Image src={assets.close_black} alt="" className="w-5" />
                    </button>
                  </div>

                  <ul className="flex flex-col gap-4 px-6 py-6">
                    <li>
                      <a href="/#top" onClick={closeMobileMenu}>
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="/#about" onClick={closeMobileMenu}>
                        About Me
                      </a>
                    </li>

                    <li>
                      <button
                        onClick={() => setShowMobileDropdown((prev) => !prev)}
                        className="flex items-center justify-between w-full"
                      >
                        Services
                        <FaAngleDown
                          className={`transition-transform ${
                            showMobileDropdown ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {showMobileDropdown && (
                          <motion.ul
                            className="ml-4 mt-3 flex flex-col gap-2 text-sm"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <li>
                              <a href="/chatbots" onClick={closeMobileMenu}>
                                AI & Chatbots
                              </a>
                            </li>
                            <li>
                              <a href="/backend" onClick={closeMobileMenu}>
                                Backend
                              </a>
                            </li>
                            <li>
                              <a href="/frontend" onClick={closeMobileMenu}>
                                Frontend
                              </a>
                            </li>
                            <li>
                              <a href="/ecommerce" onClick={closeMobileMenu}>
                                E-commerce
                              </a>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>

                    <li>
                      <a href="/#work" onClick={closeMobileMenu}>
                        My Work
                      </a>
                    </li>

                    <li>
                      <a href="/projects" onClick={closeMobileMenu}>
                        Projects
                      </a>
                    </li>

                    <li>
                      <a href="/#contact" onClick={closeMobileMenu}>
                        Contact Me
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <a className="font-Ovo" href="/#work" onClick={closeMobileMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/projects" onClick={closeMobileMenu}>
              projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="/#contact" onClick={closeMobileMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
