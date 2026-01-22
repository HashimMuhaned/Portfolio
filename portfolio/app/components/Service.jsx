"use client";

import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react";

const Service = () => {
  return (
    <motion.section
      id="services"
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
        What I Offer
      </motion.h4>

      <motion.h2
        className="text-center text-4xl sm:text-5xl font-Ovo text-black dark:text-white"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {serviceData.map(
          ({ icon, title, description, link, linkLabel }, index) => (
            <motion.article
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group border border-gray-300 dark:border-white/20
                rounded-xl px-7 py-10 cursor-pointer
                bg-white dark:bg-transparent
                hover:bg-lightHover dark:hover:bg-darkHover
                hover:shadow-xl dark:hover:shadow-white/10
                duration-300"
            >
              {/* Icon */}
              <div className="mb-5">
                <Image
                  src={icon}
                  alt={title}
                  className={`object-contain
                    ${
                      icon === assets.chatbot_3
                        ? "w-12 h-12"
                        : icon === assets.store_icon
                        ? "w-16 h-16"
                        : icon === assets.backend_icon
                        ? "w-14 h-14"
                        : "w-12 h-12"
                    }`}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-6 text-gray-600 dark:text-white/80">
                {description}
              </p>

              {/* Link */}
              <a
                href={link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium
                  text-black dark:text-white
                  group-hover:gap-3 transition-all"
              >
                {linkLabel}
                <Image
                  src={assets.right_arrow}
                  alt="arrow"
                  className="w-4"
                />
              </a>
            </motion.article>
          )
        )}
      </motion.div>
    </motion.section>
  );
};

export default Service;
