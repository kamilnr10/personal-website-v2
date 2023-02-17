import React, { useEffect, useRef } from "react";
import "./Hero.css";
import splash from "../../assets/splash.png";
import hero from "../../assets/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import arrowDown from "react-useanimations/lib/arrowDown";
import face from "../../assets/face1.png";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";

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
  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10">
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
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
      </motion.div>
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
      <div
        className="h-14 flex justify-center items-center"
        onClick={() => scrollDown(aboutSection)}
      >
        <UseAnimations animation={arrowDown} size={30} strokeColor="#00df9a" />
      </div>
      <div className="" ref={aboutSection}>
        <h2 className="mt-10 text-center font-light tracking-[.75em]">ABOUT</h2>
        <div className="w-full h-96 mx-auto rounded-full">
          <BackgroundCircles />
        </div>
        <div className="">
          <div className="flex justify-center my-2">
            <UseAnimations
              animation={github}
              size={40}
              strokeColor="white"
              autoplay={true}
              loop={true}
            />
            <UseAnimations
              animation={linkedin}
              size={40}
              strokeColor="white"
              autoplay={true}
            />
          </div>
          <p className="text-sm">
            I have got just over a seven months of experience as a software
            engineer. In this short period of time I've already contributed to
            over a dozen issues and assisted with one escalation project for one
            of the company's long-time clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
