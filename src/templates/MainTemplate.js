import React from "react";
import "../components/Hero/Hero.css";

const MainTemplate = ({ children }) => {
  return (
    <div className="px-5 text-[FFFFFF] bg-[#242424]">
      <div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="max-w-[1240px] mx-auto mt-20">{children}</div>
      </div>
    </div>
  );
};

export default MainTemplate;
