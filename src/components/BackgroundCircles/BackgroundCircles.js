import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import face from "../../assets/face2.png";
import { useInView } from "react-intersection-observer";

const styles = {
  circleWrapper: "relative flex justify-center items-center",
  firstCircle:
    "absolute border border-[#333333] rounded-full h-[160px] w-[160px] animate-ping md:h-[240px] md:w-[240px]",
  secondCircle:
    "absolute border border-[#333333] rounded-full h-[170px] w-[170px] md:h-[250px] md:w-[250px]",
  thirdCircle:
    "absolute border border-[#333333] rounded-full h-[200px] w-[200px] md:h-[270px] md:w-[270px]",
  fourthCircle:
    "absolute border border-[#00CCBB] rounded-full h-[220px] w-[220px] animate-pulse opacity-20 md:h-[280px] md:w-[280px]",
  fifthCircle:
    "absolute border border-[#333333] rounded-full h-[260px] w-[260px] md:h-[310px] md:w-[310px]",
  avatarImg: "absolute rounded-full border-2 border-[#00CCBB]",
};

const BackgroundCircles = () => {
  const controls = useAnimationControls();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.2, 1.6, 1.8, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.5, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        transition: { duration: 3 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={controls}
      className={styles.circleWrapper}
    >
      <div className={styles.firstCircle} />
      <div className={styles.secondCircle}>
        <img src={face} alt="face" className={styles.avatarImg} />
      </div>
      <div className={styles.thirdCircle} />
      <div className={styles.fourthCircle} />
      <div className={styles.fifthCircle} />
    </motion.div>
  );
};

export default BackgroundCircles;
