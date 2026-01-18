"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-5 px-2">
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32"
        ></Image>
      </motion.div> */}

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-base sm:text-xl md:text-2xl mb-2 font-Ovo"
      >
        Hi I am Hashim Gurashi
        <Image src={assets.hand_icon} alt="Wave" className="w-5 sm:w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-5xl lg:text-[66px] font-Ovo leading-tight"
      >
        Full-Stack Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-sm sm:text-base text-gray-700 dark:text-white/80 font-Ovo"
      >
        I am a Full-Stack, AI Powered Chatbots, and Automations Developer. I have
        worked on multiple projects such as Marketplaces and Customer Service
        Chatbots, eliminating the need for human intervention in repetitive
        tasks using AI automation.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-8 sm:px-10 py-3 rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition duration-300 dark:bg-transparent dark:border dark:border-white"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Hashim_Gurashi.pdf"
          download
          className="px-8 sm:px-10 py-3 rounded-full border border-gray-500 bg-white text-black flex items-center gap-2 hover:scale-105 transition duration-300 dark:bg-white"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
