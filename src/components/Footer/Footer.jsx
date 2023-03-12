import { motion } from "framer-motion";
import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${classes.footer} innerWidth paddings`}
    >
      <motion.div variants={footerVariants} className={classes.footer_content}>
        <div className={classes.footer_content_leftSide}>
          <h2 className="primaryText">
            Let's make something amazing together.
          </h2>
          <br /> <br />
          <h2 className="primaryText">
            Start by <span className={classes.footer_email}>saying hi</span>
          </h2>
        </div>
        <div className={`${classes.footer_rightSide} `}>
          {/* <p>
            Information <br />
            <span>145 New York, FL 5467, USA</span>
          </p> */}
          <p>Information</p>
          <p>145 New York, FL 5467, USA</p>
          <ul>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Works</a>
            </li>
            <li>
              <a href="">Notes</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
