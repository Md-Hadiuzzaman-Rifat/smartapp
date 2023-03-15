import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";
import classes from "./Portfolio.module.scss";
const Portfolio = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${classes.portfolio} paddings`}
    >
      <a id="portfolio">
        <motion.div variants={textVariant(0.4)} className="innerWidth">
          <h1 className="primaryText">My Latest Works</h1>
          <div className={classes.portfolio_text}>
            <p>Perfect solution for digital experience</p>
            <span>Explore More Work</span>
          </div>
        </motion.div>
        <div className={classes.portfolio_project}>
          <motion.img
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            src="./assets/showCase1.png"
            alt=""
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src="./assets/showCase2.png"
            alt=""
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src="./assets/showCase3.png"
            alt=""
          />
        </div>
      </a>
    </motion.div>
  );
};

export default Portfolio;
