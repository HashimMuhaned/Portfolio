"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { assets, frontendProjectstDataDisplay } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion"; // Use framer-motion standard
import Modal from "../components/Modal";
import {
  FaArrowLeftLong,
  FaDesktop,
  FaMobileScreenButton,
  FaCode,
} from "react-icons/fa6";
import Link from "next/link";

export default function Frontend() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     setIsDarkMode(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.theme = "dark";
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.theme = "";
  //   }
  // }, [isDarkMode]);

  // Content for Frontend Service explanation
  const frontendServices = [
    {
      icon: <FaDesktop className="text-2xl text-blue-500" />,
      title: "High-Converting Landing Pages",
      desc: "Pixel-perfect implementations focused on lead generation and aesthetic impact.",
    },
    {
      icon: <FaMobileScreenButton className="text-2xl text-purple-500" />,
      title: "Responsive Web Apps",
      desc: "Fluid layouts that provide a native-app feel across all screen sizes and devices.",
    },
    {
      icon: <FaCode className="text-2xl text-green-500" />,
      title: "Clean & Modern Tech",
      desc: "Optimized codebases built with Next.js, React, and Tailwind for maximum speed.",
    },
  ];

  return (
    <div className="dark:bg-darkTheme dark:text-white min-h-screen transition-colors duration-500">
      <Navbar />

      <div className="w-full px-[12%] py-36 scroll-mt-20">
        {/* Navigation Back */}
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 text-gray-500 hover:text-black dark:hover:text-white transition-all group"
        >
          <FaArrowLeftLong className="group-hover:-translate-x-1 duration-200" />{" "}
          Back to Home
        </Link>

        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h4 className="text-purple-600 font-semibold mb-2">
            Frontend Engineering
          </h4>
          <h2 className="text-5xl font-Ovo mb-6 leading-tight">
            Crafting Seamless Interfaces & User Experiences
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
            {`I specialize in turning complex designs into functional,
            high-performance web experiences. My approach focuses on the
            intersection of **clean code**, **speed**, and **accessibility**.
            Every project listed here represents a commitment to delivering
            "wow" moments for users while meeting strict business objectives.`}
          </p>
        </motion.div>

        {/* --- Frontend Pillars Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {frontendServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-gray-200 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-white/5"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-gray-200 dark:bg-white/10 w-full mb-16" />

        {/* --- Projects Header --- */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl font-Ovo">Recent Work</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A selection of premium websites and frontend applications.
            </p>
          </div>
          <span className="text-sm font-mono text-gray-400">
            {frontendProjectstDataDisplay.length} Projects Total
          </span>
        </div>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontendProjectstDataDisplay.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3] rounded-2xl relative cursor-pointer group bg-gray-100 dark:bg-white/5 overflow-hidden border border-gray-200 dark:border-white/10"
              key={index}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur-sm p-4 rounded-xl flex justify-between items-center group-hover:bottom-6 duration-300 shadow-xl border border-white/20">
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-[10px] text-purple-600 dark:text-purple-400 uppercase font-bold tracking-widest">
                    {project.tag || "Frontend"}
                  </p>
                </div>
                <div className="w-9 h-9 border border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <Image
                    src={assets.send_icon}
                    alt="go"
                    className="w-4 dark:invert group-hover:invert-0"
                  />
                </div>
              </div>

              {/* Overlay with Action Buttons */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
                >
                  Live Preview
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-black/60 text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold hover:bg-black transition-all"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Logic */}
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          {selectedProject && (
            <div className="max-h-[85vh] overflow-y-auto px-4 py-6">
              <div className="flex flex-col items-start">
                {/* Fixed Image Container in Modal */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-50 border border-gray-200 dark:border-white/10 shadow-inner">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain" // Contain allows viewing the full page screenshot
                  />
                </div>

                <div className="mt-8 w-full">
                  <span className="text-purple-600 font-bold text-xs uppercase tracking-widest">
                    Featured Project
                  </span>
                  <h2 className="text-4xl font-semibold mt-2">
                    {selectedProject.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-lg font-Ovo">
                    {selectedProject.description}
                  </p>

                  <div className="mt-8 whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/10">
                    <p className="font-bold mb-4 text-black dark:text-white">
                      Project Overview
                    </p>
                    {selectedProject.detailedDescription}
                  </div>

                  <div className="mt-10">
                    <p className="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">
                      Core Stack
                    </p>
                    <ul className="flex flex-wrap items-center gap-4">
                      {selectedProject.techUseed.map((tech, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center w-14 h-14 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
                        >
                          <Image
                            src={tech}
                            alt="Tech Icon"
                            width={28}
                            height={28}
                            className="dark:grayscale dark:hover:grayscale-0 transition-all"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={selectedProject.link}
                    target="_blank"
                    className="mt-10 block w-full text-center py-4 bg-black text-white dark:bg-white dark:text-black rounded-2xl font-bold hover:opacity-90 transition-all text-lg shadow-xl"
                  >
                    Launch Website
                  </a>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
