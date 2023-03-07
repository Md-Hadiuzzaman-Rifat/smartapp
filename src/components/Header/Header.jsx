import { motion } from "framer-motion";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { headerVariants } from "../../utils/motion";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${classes.header} flexBetween innerWidth paddings`}
    >
      <div className={`${classes.header_logo}`}>
        <h1>Smart App</h1>
      </div>
      <div className={`${classes.header_navigation}`}>
        <nav>
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
    </motion.div>
  );
};

export default Header;
