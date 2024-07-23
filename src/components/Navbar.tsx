"use client";
import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="Saas logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div
            onClick={toggleMenu}
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
          >
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              help
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.5, y: "-100%" }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 flex flex-col items-center justify-center"
                style={{ height: "100%" }}
              >
                <button
                  onClick={toggleMenu}
                  className="absolute top-5 right-5 bg-white p-2 rounded-full"
                >
                  Close
                </button>
                {/* Mobile nav items */}
                <a href="" className="text-white text-lg py-4">
                  About
                </a>
                <a href="" className="text-white text-lg py-4">
                  Features
                </a>
                <a href="" className="text-white text-lg py-4">
                  Updates
                </a>
                <a href="" className="text-white text-lg py-4">
                  Help
                </a>
                <a href="" className="text-white text-lg py-4">
                  Customers
                </a>
                <button className="mt-5 bg-white py-2 px-4 rounded-lg text-black font-semibold">
                  Get for free
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
