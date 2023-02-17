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

const styles = {
  wrapperHero: "mt-10",
  nameSpan: "text-secondaryText",
  wordsSpan: "text-secondaryText font-bold",
  jobName: "text-xs font-light tracking-[.75em] uppercase",
  imageWrapper: "relative w-full flex justify-center mt-10",
  splashImg: "w-96 h-96",
  avatarImg: "absolute w-64 animate-wiggle",
  arrowDown: "h-14 flex justify-center items-center",
  aboutTitle: "mt-10 text-center font-light tracking-[.75em]",
  circlesWrapper: "w-full h-96 mx-auto rounded-full",
  iconsWrapper: "flex justify-center my-2",
  aboutText: "text-sm",
};

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
    <div className={styles.wrapperHero}>
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
          Hello! My name is <span className={styles.nameSpan}>Kamil</span>.
        </span>
        <h1>
          I'm a <span className={styles.wordsSpan}>{text}</span>
          <Cursor />
        </h1>
        <h3 className={styles.jobName}>Frontend Developer</h3>
      </motion.div>
      <motion.div className={styles.imageWrapper}>
        <motion.img
          src={splash}
          alt="splash"
          className={styles.splashImg}
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src={hero}
          alt="hero"
          className={styles.avatarImg}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <div
        className={styles.arrowDown}
        onClick={() => scrollDown(aboutSection)}
      >
        <UseAnimations animation={arrowDown} size={30} strokeColor="#00df9a" />
      </div>
      <div className="" ref={aboutSection}>
        <h2 className={styles.aboutTitle}>ABOUT</h2>
        <div className={styles.circlesWrapper}>
          <BackgroundCircles />
        </div>
        <div className="">
          <div className={styles.iconsWrapper}>
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
          <p className={styles.aboutText}>
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
