import React from "react";
import { motion } from "framer-motion";
import face from "../../assets/face2.png";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[160px] w-[160px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[170px] w-[170px] border-2 border-[#00CCBB]">
        <img src={face} alt="face" className="absolute rounded-full" />
      </div>
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]  " />
      <div className="absolute border border-[#00CCBB] rounded-full h-[220px] w-[220px] animate-pulse opacity-20" />
      <div className="absolute border border-[#333333] rounded-full h-[260px] w-[260px] " />
    </motion.div>
  );
};

export default BackgroundCircles;
