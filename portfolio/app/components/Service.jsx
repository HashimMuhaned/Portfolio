import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { serviceData } from "@/assets/assets";
import { motion } from "motion/react";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(
          ({ icon, title, description, link, linkLabel }, index) => (
            <motion.div
              whileInView={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover-bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <Image
                src={icon}
                alt=""
                className={`${
                  icon === assets.chatbot_3
                    ? "w-12 h-13 rounded"
                    : icon == assets.store_icon
                    ? "w-16 h-17 rounded"
                    : icon == assets.backend_icon
                    ? "w-14 h-15 rounded"
                    : "w-12 h-13"
                }`}
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-5 dark:text-white/80">
                {description}
              </p>
              <a href={link} className="flex items-center gap-2 text-sm mt-5">
                {linkLabel}{" "}
                <Image src={assets.right_arrow} alt="arrow" className="w-4" />
              </a>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Service;
