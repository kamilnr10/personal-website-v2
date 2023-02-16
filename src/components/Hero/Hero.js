import React, { useEffect } from "react";
import "./Hero.css";
import splash from "../../assets/splash.png";
import hero from "../../assets/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Frontend Developer",
      "Software Engineer",
      "person who likes coding </>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="mt-10">
      <span>
        Hello! My name is <span className="text-secondaryText">Kamil</span>.
      </span>
      <h1>
        I'm a <span className="text-secondaryText font-bold">{text}</span>
        <Cursor />
      </h1>
      <h3 className="text-xs font-light tracking-[.75em] uppercase">
        Frontend Developer
      </h3>
      <motion.div className="relative w-full flex justify-center mt-10">
        <motion.img
          src={splash}
          alt="splash"
          className="w-96 h-96"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src={hero}
          alt="hero"
          className="absolute w-64 animate-wiggle"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <div className="h-14 flex justify-center items-center">
        <UseAnimations animation={arrowDown} size={30} strokeColor="#00df9a" />
      </div>
      <div className="">
        <p>
          I have got just over a seven months of experience as a software
          engineer. In this short period of time I've already contributed to
          over a dozen issues and assisted with one escalation project for one
          of the company's long-time clients.
        </p>
      </div>
    </div>
  );
};

export default Hero;
