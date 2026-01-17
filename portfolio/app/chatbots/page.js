"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { assets, AiProjectstDataDisplay } from "@/assets/assets";
import { motion } from "framer-motion"; // Note: standard framer-motion import
import Modal from "../components/Modal";
import { FaArrowLeftLong, FaRobot, FaBolt, FaBrain } from "react-icons/fa6";
import Link from "next/link";

export default function ChatbotsPage() {
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

  // Content for Service presentation
  const services = [
    {
      icon: <FaRobot className="text-2xl text-blue-500" />,
      title: "Intelligent Chatbots",
      desc: "Custom NLP solutions using RAG (Retrieval-Augmented Generation) to provide accurate, context-aware responses from your own data.",
    },
    {
      icon: <FaBolt className="text-2xl text-yellow-500" />,
      title: "Workflow Automation",
      desc: "Connecting AI to your daily tools to automate lead capture, data entry, and repetitive tasks, saving hours of manual work.",
    },
    {
      icon: <FaBrain className="text-2xl text-purple-500" />,
      title: "Autonomous Agents",
      desc: "Developing agents that don't just talk, but 'do'—capable of browsing the web, analyzing files, and executing complex multi-step tasks.",
    },
  ];

  return (
    <div className="dark:bg-darkTheme dark:text-white min-h-screen transition-all duration-500">
      <Navbar />

      <div className="w-full px-[12%] py-36 scroll-mt-20">
        {/* Back Button */}
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 text-gray-500 hover:text-black dark:hover:text-white transition-all group"
        >
          <FaArrowLeftLong className="group-hover:-translate-x-1 duration-200" />{" "}
          Back to Home
        </Link>

        {/* --- Intro Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h4 className="text-blue-600 font-semibold mb-2">
            Specialized Services
          </h4>
          <h2 className="text-5xl font-Ovo mb-6">
            AI Projects & Intelligent Automations
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-Ovo leading-relaxed">
            I build systems that bridge the gap between Large Language Models
            and business efficiency. Whether it's a customer-facing assistant or
            a complex internal automation, my goal is to create tools that
            provide accurate, measurable results and a seamless user experience.
          </p>
        </motion.div>

        {/* --- Service Feature Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 border border-gray-200 dark:border-white/10 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm"
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

        {/* --- Projects Grid --- */}
        <h3 className="text-3xl font-Ovo mb-10">Selected Technical Builds</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AiProjectstDataDisplay.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="aspect-[4/3] rounded-2xl relative cursor-pointer group bg-gray-100 dark:bg-white/5 overflow-hidden border border-gray-200 dark:border-white/10"
              key={index}
            >
              {/* Fix: Controlled Image sizing */}
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info Box (Minimal version) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl flex justify-between items-center group-hover:bottom-6 duration-300 shadow-lg">
                <div>
                  <h2 className="font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-all"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-black/60 text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold hover:bg-black transition-all"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Logic */}
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          {selectedProject && (
            <div className="max-h-[80vh] overflow-y-auto px-4 py-4">
              <div className="flex flex-col items-start">
                {/* Modal Image container */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <h2 className="text-3xl font-semibold mt-8">
                  {selectedProject.title}
                </h2>

                <p className="text-blue-500 font-medium mt-2">
                  {selectedProject.description}
                </p>

                <div className="mt-6 whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed border-l-4 border-gray-200 dark:border-white/10 pl-5">
                  {selectedProject.detailedDescription}
                </div>

                <div className="mt-10 w-full">
                  <p className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
                    Tech Stack
                  </p>
                  <ul className="flex flex-wrap items-center gap-4">
                    {selectedProject.techUseed.map((tech, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center w-14 h-14 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl hover:-translate-y-1 duration-300"
                      >
                        <Image
                          src={tech}
                          alt="Tool"
                          width={28}
                          height={28}
                          className="opacity-80"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-full text-center py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl font-bold hover:opacity-90 transition-all shadow-xl"
                >
                  Live Demo
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
