"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 pb-8">
      {/* Top Section */}
      <div className="text-center px-5">
        <p className="cursor-pointer font-sans font-bold text-2xl sm:text-3xl text-black dark:text-white w-max mx-auto mb-3">
          Portfolio
        </p>

        <div className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-700 dark:text-white/80">
          <Image src={assets.mail_icon} alt="Email" className="w-5 sm:w-6" />
          <a
            href="mailto:hashimcode123@gmail.com"
            className="hover:underline"
          >
            hashimcode123@gmail.com
          </a>
        </div>
      </div>

      {/* Divider + Bottom Section */}
      <div className="mt-12 border-t border-gray-300 dark:border-white/20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-center sm:text-left">
          <p className="text-sm text-gray-600 dark:text-white/70">
            © 2025 Hashim Gurashi. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            <li>
              <a
                href="https://github.com/HashimMuhaned"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 dark:text-white hover:text-black dark:hover:text-white transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 dark:text-white hover:text-black dark:hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-700 dark:text-white hover:text-black dark:hover:text-white transition"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
