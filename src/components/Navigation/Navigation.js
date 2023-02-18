import React, { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { Sling as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { useLockBodyScroll } from "../../helpers/useLockBodyScroll";
import { variants, menuVariants } from "../../helpers/animationVariants";
import { LockScreen } from "../LockScreen/LockScreen";
import { MdPersonOutline, MdOutlineHome } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { AiOutlineExperiment, AiOutlineMessage } from "react-icons/ai";
import { debounce } from "../../helpers/debounce";
import { NavLink } from "react-router-dom";
import { styles } from "./Navigation.styles";

const links = [
  {
    to: "/",
    name: "Home",
    icon: (
      <MdOutlineHome
        size={20}
        className="absolute left-1/2 -translate-x-1/2 ease-in-out"
      />
    ),
  },
  {
    to: "/about",
    name: "About",
    icon: (
      <MdPersonOutline
        size={20}
        className="absolute left-1/2 -translate-x-1/2 ease-in-out"
      />
    ),
  },
  {
    to: "/skills",
    name: "Skills",
    icon: (
      <AiOutlineExperiment
        size={20}
        className="absolute left-1/2 -translate-x-1/2 ease-in-out"
      />
    ),
  },
  {
    to: "/experience",
    name: "Experience",
    icon: (
      <BiBrain
        size={20}
        className="absolute left-1/2 -translate-x-1/2 ease-in-out"
      />
    ),
  },
  {
    to: "/contact",
    name: "Contact",
    icon: (
      <AiOutlineMessage
        size={20}
        className="absolute left-1/2 -translate-x-1/2 ease-in-out"
      />
    ),
  },
];

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

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
        visible ? "translate-y-0" : "-translate-y-20 md:-translate-y-40"
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
        <img src={logo} alt="logo" className="w-20 md:w-28" />
      </motion.div>
      <div className={styles.menuMedium}>
        <motion.ul
          className={styles.navlinksMedium}
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
          {links.map((link) => {
            return (
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive ? "h-12 text-secondaryText" : "flex"
                }
              >
                {({ isActive }) =>
                  isActive ? (
                    <div className="relative">
                      <p>{link.name}</p>
                      <motion.div
                        initial={{
                          y: -20,
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.7,
                        }}
                      >
                        {link.icon}
                      </motion.div>
                    </div>
                  ) : (
                    <p>{link.name}</p>
                  )
                }
              </NavLink>
            );
          })}
        </motion.ul>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "flex text-secondaryText" : "flex"
                    }
                  >
                    <MdOutlineHome size={20} className={styles.iconLink} />
                    Home
                  </NavLink>
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "flex text-secondaryText" : "flex"
                    }
                  >
                    <MdPersonOutline size={20} className={styles.iconLink} />
                    About
                  </NavLink>
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                      isActive ? "flex text-secondaryText" : "flex"
                    }
                  >
                    <BiBrain size={20} className={styles.iconLink} />
                    Skills
                  </NavLink>
                </motion.li>
                <motion.li variants={variants} className={styles.navLinksSmall}>
                  <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                      isActive ? "flex text-secondaryText" : "flex"
                    }
                  >
                    <AiOutlineExperiment
                      size={20}
                      className={styles.iconLink}
                    />
                    Experience
                  </NavLink>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      {nav && <LockScreen />}
    </nav>
  );

  // return (
  //   <nav
  //     className={`${styles.navClass} ${
  //       visible ? "translate-y-0" : "-translate-y-20 md:-translate-y-40"
  //     } ${window.pageYOffset > 40 ? "backdrop-blur-sm shadow-lg" : null}`}
  //   >
  //     <motion.div
  //       className={styles.logo}
  //       initial={{
  //         x: -500,
  //         opacity: 0,
  //         scale: 0.5,
  //       }}
  //       animate={{ x: 0, opacity: 1, scale: 1 }}
  //       transition={{
  //         duration: 1.5,
  //       }}
  //     >
  //       <img src={logo} alt="logo" className="w-20 md:w-28" />
  //     </motion.div>
  //     <div className={styles.menuMedium}>
  //       <motion.ul
  //         className={styles.navlinksMedium}
  //         initial={{
  //           x: 500,
  //           opacity: 0,
  //           scale: 0.5,
  //         }}
  //         animate={{ x: 0, opacity: 1, scale: 1 }}
  //         transition={{
  //           duration: 1.5,
  //         }}
  //       >
  //         <NavLink
  //           to="/"
  //           className={({ isActive }) =>
  //             isActive ? "h-12 text-secondaryText" : "flex"
  //           }
  //         >
  //           {({ isActive }) =>
  //             isActive ? (
  //               <div className="relative">
  //                 <p>Home</p>
  //                 <motion.div
  //                   initial={{
  //                     y: -20,
  //                     opacity: 0,
  //                     scale: 0.5,
  //                   }}
  //                   animate={{ y: 0, opacity: 1, scale: 1 }}
  //                   transition={{
  //                     duration: 0.7,
  //                   }}
  //                 >
  //                   <MdOutlineHome
  //                     size={20}
  //                     className="absolute left-1/2 -translate-x-1/2 ease-in-out"
  //                   />
  //                 </motion.div>
  //               </div>
  //             ) : (
  //               <p>Home</p>
  //             )
  //           }
  //         </NavLink>
  //         <NavLink
  //           to="/about"
  //           className={({ isActive }) =>
  //             isActive ? "h-12 text-secondaryText" : "flex"
  //           }
  //         >
  //           {({ isActive }) =>
  //             isActive ? (
  //               <div className="relative">
  //                 <p>About</p>
  //                 <motion.div
  //                   initial={{
  //                     y: -20,
  //                     opacity: 0,
  //                     scale: 0.5,
  //                   }}
  //                   animate={{ y: 0, opacity: 1, scale: 1 }}
  //                   transition={{
  //                     duration: 0.7,
  //                   }}
  //                 >
  //                   <MdPersonOutline
  //                     size={20}
  //                     className="absolute left-1/2 -translate-x-1/2 ease-in-out"
  //                   />
  //                 </motion.div>
  //               </div>
  //             ) : (
  //               <p>About</p>
  //             )
  //           }
  //         </NavLink>
  //         <NavLink
  //           to="/skills"
  //           className={({ isActive }) =>
  //             isActive ? "h-12 text-secondaryText" : "flex"
  //           }
  //         >
  //           {({ isActive }) =>
  //             isActive ? (
  //               <div className="relative">
  //                 <p>Skills</p>
  //                 <motion.div
  //                   initial={{
  //                     y: -20,
  //                     opacity: 0,
  //                     scale: 0.5,
  //                   }}
  //                   animate={{ y: 0, opacity: 1, scale: 1 }}
  //                   transition={{
  //                     duration: 0.7,
  //                   }}
  //                 >
  //                   <BiBrain
  //                     size={20}
  //                     className="absolute left-1/2 -translate-x-1/2 ease-in-out"
  //                   />
  //                 </motion.div>
  //               </div>
  //             ) : (
  //               <p>Skills</p>
  //             )
  //           }
  //         </NavLink>
  //         <NavLink
  //           to="/experience"
  //           className={({ isActive }) =>
  //             isActive ? "h-12 text-secondaryText" : "flex"
  //           }
  //         >
  //           {({ isActive }) =>
  //             isActive ? (
  //               <div className="relative">
  //                 <p>Experience</p>
  //                 <motion.div
  //                   initial={{
  //                     y: -20,
  //                     opacity: 0,
  //                     scale: 0.5,
  //                   }}
  //                   animate={{ y: 0, opacity: 1, scale: 1 }}
  //                   transition={{
  //                     duration: 0.7,
  //                   }}
  //                 >
  //                   <AiOutlineExperiment
  //                     size={20}
  //                     className="absolute left-1/2 -translate-x-1/2 ease-in-out"
  //                   />
  //                 </motion.div>
  //               </div>
  //             ) : (
  //               <p>Experience</p>
  //             )
  //           }
  //         </NavLink>
  //         <NavLink
  //           to="/contact"
  //           className={({ isActive }) =>
  //             isActive ? "h-12 text-secondaryText" : "flex"
  //           }
  //         >
  //           {({ isActive }) =>
  //             isActive ? (
  //               <div className="relative">
  //                 <p>Contact</p>
  //                 <motion.div
  //                   initial={{
  //                     y: -20,
  //                     opacity: 0,
  //                     scale: 0.5,
  //                   }}
  //                   animate={{ y: 0, opacity: 1, scale: 1 }}
  //                   transition={{
  //                     duration: 0.7,
  //                   }}
  //                 >
  //                   <AiOutlineMessage
  //                     size={20}
  //                     className="absolute left-1/2 -translate-x-1/2 ease-in-out"
  //                   />
  //                 </motion.div>
  //               </div>
  //             ) : (
  //               <p>Contact</p>
  //             )
  //           }
  //         </NavLink>
  //       </motion.ul>
  //       <div className={styles.menuSmall}>
  //         <motion.div
  //           className={styles.hamburgerMenu}
  //           initial={{
  //             x: 500,
  //             opacity: 0,
  //             scale: 0.5,
  //           }}
  //           animate={{ x: 0, opacity: 1, scale: 1 }}
  //           transition={{
  //             duration: 1.5,
  //           }}
  //         >
  //           <Hamburger
  //             toggled={nav}
  //             toggle={handleNav}
  //             color={nav ? "#00df9a" : "#FFF"}
  //           />
  //         </motion.div>

  //         <motion.div
  //           variants={menuVariants}
  //           animate={nav ? "open" : "closed"}
  //           className={nav ? styles.navOpen : styles.navClosed}
  //         >
  //           <div className={styles.sideBarWrapper}>
  //             <ul className={styles.listSideBar}>
  //               <motion.li variants={variants} className={styles.navLinksSmall}>
  //                 <NavLink
  //                   to="/"
  //                   className={({ isActive }) =>
  //                     isActive ? "flex text-secondaryText" : "flex"
  //                   }
  //                 >
  //                   <MdOutlineHome size={20} className={styles.iconLink} />
  //                   Home
  //                 </NavLink>
  //               </motion.li>
  //               <motion.li variants={variants} className={styles.navLinksSmall}>
  //                 <NavLink
  //                   to="/about"
  //                   className={({ isActive }) =>
  //                     isActive ? "flex text-secondaryText" : "flex"
  //                   }
  //                 >
  //                   <MdPersonOutline size={20} className={styles.iconLink} />
  //                   About
  //                 </NavLink>
  //               </motion.li>
  //               <motion.li variants={variants} className={styles.navLinksSmall}>
  //                 <NavLink
  //                   to="/skills"
  //                   className={({ isActive }) =>
  //                     isActive ? "flex text-secondaryText" : "flex"
  //                   }
  //                 >
  //                   <BiBrain size={20} className={styles.iconLink} />
  //                   Skills
  //                 </NavLink>
  //               </motion.li>
  //               <motion.li variants={variants} className={styles.navLinksSmall}>
  //                 <NavLink
  //                   to="/experience"
  //                   className={({ isActive }) =>
  //                     isActive ? "flex text-secondaryText" : "flex"
  //                   }
  //                 >
  //                   <AiOutlineExperiment
  //                     size={20}
  //                     className={styles.iconLink}
  //                   />
  //                   Experience
  //                 </NavLink>
  //               </motion.li>
  //             </ul>
  //           </div>
  //         </motion.div>
  //       </div>
  //     </div>
  //     {nav && <LockScreen />}
  //   </nav>
  // );
};

export default Navigation;
