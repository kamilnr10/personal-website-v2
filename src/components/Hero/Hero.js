import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import splash from "../../assets/splash.png";
import hero from "../../assets/hero.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";
import { RxDoubleArrowDown } from "react-icons/rx";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import arrowDown from "react-useanimations/lib/arrowDown";
import face from "../../assets/face1.png";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import { useInView } from "react-intersection-observer";
import { styles } from "./Hero.styles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Frontend Developer",
      "Software Engineer",
      "person who likes coding/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const aboutSection = useRef(null);

  const scrollDown = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.heroScreen}>
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
          className={styles.mainText}
        >
          <span>
            Hello! My name is <span className={styles.nameSpan}>Kamil</span>.
          </span>
          <p>
            I'm a <span className={styles.wordsSpan}>{text}</span>
            <Cursor />
          </p>
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
          <UseAnimations
            animation={arrowDown}
            size={windowSize[0] > 768 ? 70 : 40}
            strokeColor="#00df9a"
          />
        </div>
      </div>
      <div className={styles.aboutMeSection} ref={aboutSection}>
        <h2 className={styles.aboutTitle}>ABOUT</h2>
        <div className={styles.circlesWrapper}>
          <BackgroundCircles />
        </div>
        <div className="md:flex md:flex-col md:items-center">
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
              loop={true}
            />
          </div>

          <p className={styles.aboutText}>
            I have got just over a seven months of experience as a software
            engineer. In this short period of time I've already contributed to
            over a dozen issues and assisted with one escalation project for one
            of the company's long-time clients. <br />
            In my previous role I was working as Netsuite Administrator.It was
            an incredible opportunity for me to develop my technical and social
            skills. I was working on implementing the system and one of my
            responsibilities was to analysize processes within company. In the
            beginning I cooporated with a small team but after systems's
            launching, I was already working with everyone in the company. Also
            I had a chance to write some scripts with using javascript.
          </p>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={styles.wrapperHero}>
  //     <div className="">
  //       <motion.div
  //         initial={{
  //           y: -500,
  //           opacity: 0,
  //           scale: 0.5,
  //         }}
  //         animate={{ y: 0, opacity: 1, scale: 1 }}
  //         transition={{
  //           duration: 1.5,
  //         }}
  //       >
  //         <span>
  //           Hello! My name is <span className={styles.nameSpan}>Kamil</span>.
  //         </span>
  //         <h1>
  //           I'm a <span className={styles.wordsSpan}>{text}</span>
  //           <Cursor />
  //         </h1>
  //         <h3 className={styles.jobName}>Frontend Developer</h3>
  //       </motion.div>
  //       <motion.div className={styles.imageWrapper}>
  //         <motion.img
  //           src={splash}
  //           alt="splash"
  //           className={styles.splashImg}
  //           initial={{ scale: 0 }}
  //           animate={{ scale: 1, rotate: 360 }}
  //           transition={{ duration: 1, delay: 0.5 }}
  //         />
  //         <motion.img
  //           src={hero}
  //           alt="hero"
  //           className={styles.avatarImg}
  //           initial={{ scale: 0, opacity: 0 }}
  //           animate={{ scale: 1, opacity: 1 }}
  //           transition={{ duration: 0.5 }}
  //         />
  //       </motion.div>
  //       <div
  //         className={styles.arrowDown}
  //         onClick={() => scrollDown(aboutSection)}
  //       >
  //         <UseAnimations
  //           animation={arrowDown}
  //           size={30}
  //           strokeColor="#00df9a"
  //         />
  //       </div>
  //     </div>
  //     <div className="" ref={aboutSection}>
  //       <h2 className={styles.aboutTitle}>ABOUT</h2>
  //       <div className={styles.circlesWrapper}>
  //         <BackgroundCircles />
  //       </div>
  //       <div className="">
  //         <div className={styles.iconsWrapper}>
  //           <UseAnimations
  //             animation={github}
  //             size={40}
  //             strokeColor="white"
  //             autoplay={true}
  //             loop={true}
  //           />
  //           <UseAnimations
  //             animation={linkedin}
  //             size={40}
  //             strokeColor="white"
  //             autoplay={true}
  //           />
  //         </div>
  //         <p className={styles.aboutText}>
  //           I have got just over a seven months of experience as a software
  //           engineer. In this short period of time I've already contributed to
  //           over a dozen issues and assisted with one escalation project for one
  //           of the company's long-time clients.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hero;
