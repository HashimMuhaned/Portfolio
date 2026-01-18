"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import {
  AiProjectstDataDisplay,
  frontendProjectstDataDisplay,
} from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import {
  FaArrowLeftLong,
  FaRobot,
  FaChartLine,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const allProjects = useMemo(() => {
    return [...AiProjectstDataDisplay, ...frontendProjectstDataDisplay];
  }, []);

  const categories = [
    "All",
    "AI",
    "Frontend",
    "Backend",
    "Automations",
    "Full-stack",
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter(
          (project) => project.tag?.toLowerCase() === filter.toLowerCase(),
        );

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-white dark:bg-darkTheme transition-colors duration-500">
      <Navbar />

      <div className="w-full px-[12%] py-36 scroll-mt-20">
        {/* --- Header Section --- */}
        <Link
          href="/"
          className="flex items-center gap-2 mb-10 text-gray-500 hover:text-black dark:hover:text-white transition-all group"
        >
          <FaArrowLeftLong className="group-hover:-translate-x-1 duration-200" />{" "}
          Back to Home
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h4 className="text-lg font-Ovo mb-2 text-blue-600 dark:text-blue-400">
            Technical Portfolio
          </h4>
          <h2 className="text-5xl font-Ovo">AI & Full-Stack Solutions</h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-700 dark:text-gray-300 leading-relaxed font-Ovo text-lg">
            I specialize in building intelligent ecosystems. From autonomous AI
            agents and RAG-based chatbots to high-performance web applications.
          </p>
        </motion.div>

        {/* --- Services Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 border border-gray-100 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-white/5">
            <FaRobot className="text-3xl mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Custom AI Agents
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developing LLM-powered agents that handle complex logic and
              customer support.
            </p>
          </div>
          <div className="p-6 border border-gray-100 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-white/5">
            <FaWandMagicSparkles className="text-3xl mb-4 text-purple-500" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Smart Automations
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Streamlining workflows using Make.com, Zapier, and Python.
            </p>
          </div>
          <div className="p-6 border border-gray-100 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-white/5">
            <FaChartLine className="text-3xl mb-4 text-green-500" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Scalable Full-Stack
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Building robust interfaces with Next.js and React.
            </p>
          </div>
        </div>

        <hr className="mb-16 border-gray-200 dark:border-white/10" />

        {/* --- Filter Section --- */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl font-Ovo mb-6 dark:text-white">
            Project Gallery
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  filter === cat
                    ? "bg-black text-white border-black dark:bg-white dark:text-black"
                    : "border-gray-300 hover:border-black dark:border-white/20 text-gray-600 dark:text-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- Projects Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 cursor-pointer shadow-sm hover:shadow-2xl transition-all"
              >
                {/* 
                  IMAGE FIX: 
                  - Changed 'object-cover' to 'object-contain' to show the FULL image.
                  - Added padding (p-4) so it doesn't touch the edges.
                */}
                <div className="relative w-full h-full p-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-xs mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Visit Site
                    </a>
                    {/* TRIGGER MODAL BUTTON */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Label visible when NOT hovering */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-black/90 backdrop-blur-sm p-3 rounded-xl flex justify-between items-center group-hover:opacity-0 transition-opacity border border-gray-100 dark:border-white/10">
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white truncate max-w-[120px]">
                      {project.title}
                    </p>
                    <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
                      {project.tag}
                    </p>
                  </div>
                  <div className="text-gray-400">
                    <span className="text-xl">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Modal --- */}
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          {selectedProject && (
            <div className="max-h-[85vh] overflow-y-auto custom-scrollbar p-2">
              {/* IMAGE FIX IN MODAL: Ensures full screenshot is visible */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-50 border border-gray-200 dark:border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="px-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {selectedProject.tag}
                </span>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                  {selectedProject.title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4 italic border-l-4 border-blue-500 pl-4">
                  {selectedProject.description}
                </p>

                <div className="my-8 h-px bg-gray-100 dark:bg-white/10 w-full" />

                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {selectedProject.detailedDescription}
                </div>

                <div className="mt-10">
                  <p className="font-bold text-sm mb-4 text-gray-900 dark:text-white uppercase tracking-widest">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.techUseed?.map((tech, i) => (
                      <div
                        key={i}
                        className="p-3 border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/5 shadow-sm"
                      >
                        <Image src={tech} alt="tech" width={28} height={28} />
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  className="block w-full text-center bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold hover:opacity-90 transition-all mt-10"
                >
                  Visit Live Website
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
