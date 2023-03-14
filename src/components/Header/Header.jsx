import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { headerVariants } from "../../utils/motion";
import classes from "./Header.module.scss";

const Header = () => {
  let menubar = (
      <div className={classes.header_menu_link}>
        <li>
          <a href="">services</a>
        </li>
        <li>
          <a href="">experience</a>
        </li>
        <li>
          <a href="">portfolio</a>
        </li>
        <li>
          <a href="">testimonials</a>
        </li>
        <li>
          <a href="">+8801910803372 </a>
          <span>
            <BiPhoneCall size={40} />
          </span>
        </li>
      </div>
  );

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`${classes.header} bg-primary`}
    >
      <div
        className={`${classes.header_content} innerWidth paddings xPaddings`}
      >
        <div className={classes.header_content_name}>
          <p>Omega</p>
        </div>
        <div className={classes.header_content_link}>
          <li>
            <a href="">services</a>
          </li>
          <li>
            <a href="">experience</a>
          </li>
          <li>
            <a href="">portfolio</a>
          </li>
          <li>
            <a href="">testimonials</a>
          </li>
          <li>
            <a href="">+8801910803372 </a>
            <span>
              <BiPhoneCall size={40} />
            </span>
          </li>
        </div>
        <div
          className={classes.menuControl}
          onClick={() => setOpenMenu((menu) => !menu)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
