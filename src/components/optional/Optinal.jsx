import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { headerVariants } from "../../utils/motion";
import classes from "./Optional.module.scss";

const Header = () => {
  //   let Menubar = (
  //     // <div className={classes.header_content_link}>
  //  <div className={classes.header_menu_link}>
  //       <li>
  //         <a href="">services</a>
  //       </li>
  //       <li>
  //         <a href="">experience</a>
  //       </li>
  //       <li>
  //         <a href="">portfolio</a>
  //       </li>
  //       <li>
  //         <a href="">testimonials</a>
  //       </li>
  //       <li>
  //         <a href="">+8801910803372 </a>
  //         <span>
  //           <BiPhoneCall size={40} />
  //         </span>
  //       </li>
  //     </div>
  //   );

  const [openMenu, setOpenMenu] = useState(false);

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
    >
      <div
        className={`${classes.header_content} innerWidth paddings xPaddings`}
      >
        <div className={classes.header_content_name}>
          <p>Omega</p>
        </div>
        <div className={classes.header_content_link}>
          <li>
            <a href="">service</a>
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
        <div className={classes.menuControl} onClick={handleMenubar}>
          <BiMenuAltRight size={30} />
        </div>
        {openMenu && (
          <div>
            <div className={classes.header_menu_link} getMenuStyles={openMenu}>
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
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
