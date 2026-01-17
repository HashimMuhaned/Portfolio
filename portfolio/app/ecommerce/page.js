"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";

export default function ecommerce() {
  const [isDarkMode, setIsDarkMode] = useState();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="w-full px-[12%] py-36 scroll-mt-20">
        <h2 className="text-center text-5xl font-Ovo">NO E-Commerce Projects yet</h2>
        {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Those are the Online Store Projects the I have worked on, with happy
          clients and high sales.
        </p> */}
        {/* <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
          <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <Image alt=""></Image>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">project.title</h2>
                <p className="text-sm text-gray-700">project.description</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="project" className="w-5" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
