import { motion } from "framer-motion";
import React, { useState } from "react";
import { BiMenuAltRight, BiPhone } from "react-icons/bi";
import { headerVariants } from "../../utils/motion";
import classes from "./Header.module.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      style={{position:"sticky",top:0}}
    >
      <div className={`${classes.header} xPaddings innerWidth`}>
        <div className={`${classes.header_logo}`}>
            <h1 style={{marginTop:"4rem"}}>Smart App</h1>
        </div>
        <div className={`${classes.header_navigation}`}>
          <nav>
            <div
              className={classes.menuIcon}
              onClick={() => setOpenMenu((prevMenu) => !prevMenu)}
            >
              <BiMenuAltRight size={30}></BiMenuAltRight>
            </div>

            <ul className={classes.menu}>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">experience</a>
              </li>
              <li>
                <a href="#">portfolio</a>
              </li>
              <li>
                <a href="#">testimonials</a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <div className="flexCenter">
                    <p style={{ marginRight: "10px" }}>+880-1910803372</p>
                    <BiPhone size={"40px"} />
                  </div>{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
