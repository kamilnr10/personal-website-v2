import React, { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "../../helpers/useLockBodyScroll";

const LockScreen = () => {
  useLockBodyScroll();
  return <></>;
};

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.3, delayChildren: 0.4 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    scale: 0.2,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    console.log(nav);
  }, []);

  return (
    <nav className="w-full h-20 absolute top-0 left-1/2 transform -translate-x-1/2 px-5 max-w-[1240px] flex items-center justify-between">
      <div className="z-20 flex justify-center items-center">
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div className="flex items-center">
        <ul className="space-between gap-5 hidden md:flex">
          <li className="">Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <div className="md:hidden">
          <div className="flex justify-center items-center md:hidden">
            <Hamburger
              toggled={nav}
              toggle={handleNav}
              color={nav ? "#00df9a" : "#FFF"}
            />
          </div>

          <motion.div
            variants={menuVariants}
            animate={nav ? "open" : "closed"}
            className={
              nav
                ? "fixed left-0 top-0 w-[80%] h-screen px-5 border-r border-r-gray-400 bg-[#242424] ease-in duration-300"
                : "fixed left-[-100%] top-0 w-[60%] h-screen px-5 ease-in duration-300"
            }
          >
            <div className="flex flex-col items-center justify-center">
              <ul className="h-full flex flex-col justify-center space-y-10">
                <motion.li
                  variants={variants}
                  className="before:content-['<_'] after:content-['_/>'] active:text-tertiaryText"
                >
                  Home
                </motion.li>
                <motion.li
                  variants={variants}
                  className="before:content-['<_'] after:content-['_/>'] active:text-tertiaryText"
                >
                  About
                </motion.li>
                <motion.li
                  variants={variants}
                  className="before:content-['<_'] after:content-['_/>'] active:text-tertiaryText"
                >
                  Skills
                </motion.li>
                <motion.li
                  variants={variants}
                  className="before:content-['<_'] after:content-['_/>'] active:text-tertiaryText"
                >
                  Experience
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      {nav && <LockScreen />}
    </nav>
  );
};

export default Navigation;
