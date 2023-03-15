import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { headerVariants } from "../../utils/motion";
import classes from "./Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setOpenMenu,
  });

  const handleMenubar = () => {
    console.log("hello world");
    setOpenMenu((menu) => !menu);
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`${classes.header} bg-primary`}
      style={{ boxShadow: headerShadow }}
    >
      <div
        className={`${classes.header_content} innerWidth paddings xPaddings`}
      >
        <div className={classes.header_content_name}>
          <p>Omega</p>
        </div>
        <div className={classes.header_content_link}>
          <li>
            <a href="#services">service</a>
          </li>
          <li>
            <a href="#experience">experience</a>
          </li>
          <li>
            <a href="#portfolio">portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="">+8801910803372 </a>
            <span>
              <BiPhoneCall size={40} />
            </span>
          </li>
        </div>
        <div className={classes.menuControl} onClick={handleMenubar}>
          <BiMenuAltRight size={30} />
        </div>
        {openMenu && (
          <div>
            <div
              className={classes.header_menu_link}
              ref={menuRef}
            >
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#experience">experience</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#testimonials">testimonials</a>
              </li>
              <li>
                <a href="">+8801910803372 </a>
                <span>
                  <BiPhoneCall size={40} />
                </span>
              </li>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
