"use client";

import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.section
      id="work"
      className="w-full px-[10%] sm:px-[12%] py-14 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-Ovo text-black dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My Latest Work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I have developed many projects in the past few months. Here are some of
        the latest projects I have worked on.
      </motion.p>

      {/* Work Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {workData.map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group shadow-md"
          >
            {/* Project Image */}
            <Image
              src={project.bgImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Card */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2
              w-[85%] bg-white dark:bg-darkHover
              rounded-lg px-5 py-4 flex items-center justify-between
              shadow-lg transition-all duration-300
              group-hover:bottom-6"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white/70">
                  {project.description}
                </p>
              </div>

              <div
                className="border border-black dark:border-white
                rounded-full w-10 aspect-square flex items-center justify-center
                shadow-[2px_2px_0_#000]
                group-hover:bg-lime-300 transition"
              >
                <Image
                  src={assets.send_icon}
                  alt="Open project"
                  className="w-5"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Show More */}
      <motion.a
        href="/projects"
        className="w-max mx-auto my-20 flex items-center gap-3
          border border-gray-700 dark:border-white
          rounded-full px-10 py-3 text-gray-700 dark:text-white
          hover:bg-lightHover dark:hover:bg-darkHover transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Show More
        <Image src={assets.right_arrow_bold} alt="" />
      </motion.a>
    </motion.section>
  );
};

export default Work;
