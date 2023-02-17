import React, { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "../../helpers/useLockBodyScroll";
import { variants, menuVariants } from "../../helpers/animationVariants";
import { LockScreen } from "../LockScreen/LockScreen";
import { MdPersonOutline, MdOutlineHome } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { debounce } from "../../helpers/debounce";

const styles = {
  navClass:
    "w-full h-20 fixed top-0 left-1/2 transform -translate-x-1/2 px-5 max-w-[1240px] flex items-center justify-between ease-in duration-300",
  logo: "z-20 flex justify-center items-center",
  menuMedium: "flex items-center",
  navlinksMedium: "space-between gap-5 hidden md:flex",
  menuSmall: "md:hidden",
  hamburgerMenu: "flex justify-center items-center",
  navOpen:
    "fixed left-0 top-0 w-[80%] h-screen px-5 border-r border-r-gray-400 bg-[#242424] ease-in duration-300",
  navClosed:
    "fixed left-[-100%] top-0 w-[60%] h-screen px-5 ease-in duration-300",
  sideBarWrapper: "flex flex-col items-center justify-center",
  listSideBar: "h-full flex flex-col justify-center space-y-10",
  navLinksSmall:
    "flex before:content-['<_'] after:content-['_/>'] active:text-tertiaryText",
  iconLink: "mr-1 ml-1",
};

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    // console.log("current position " + currentScrollPos);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 40);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`${styles.navClass} ${
        visible ? "translate-y-0" : "-translate-y-20"
      } ${window.pageYOffset > 40 ? "backdrop-blur-sm shadow-lg" : null}`}
    >
      <motion.div
        className={styles.logo}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
      >
        <img src={logo} alt="logo" className="w-20" />
      </motion.div>
      <div className={styles.menuMedium}>
        <ul className={styles.navlinksMedium}>
          <li className="">Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
        <div className={styles.menuSmall}>
          <motion.div
            className={styles.hamburgerMenu}
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
            }}
          >
            <Hamburger
              toggled={nav}
              toggle={handleNav}
              color={nav ? "#00df9a" : "#FFF"}
            />
          </motion.div>

          <motion.div
            variants={menuVariants}
            animate={nav ? "open" : "closed"}
            className={nav ? styles.navOpen : styles.navClosed}
          >
            <div className={styles.sideBarWrapper}>
              <ul className={styles.listSideBar}>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <MdOutlineHome size={20} className={styles.iconLink} />
                  Home
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <MdPersonOutline size={20} className={styles.iconLink} />
                  About
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <BiBrain size={20} className={styles.iconLink} />
                  Skills
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <AiOutlineExperiment size={20} className={styles.iconLink} />
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
