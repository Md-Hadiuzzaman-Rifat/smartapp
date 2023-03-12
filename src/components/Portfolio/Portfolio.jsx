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
    viewport={{ once: false, amount: 0.25 }} className={`${classes.portfolio} paddings`}>
      <motion.div variants={textVariant(.4)} className="innerWidth">
        <h1 className="primaryText">My Latest Works</h1>
        <div className={classes.portfolio_text}>
          <p>Perfect solution for digital experience</p>
          <span>Explore More Work</span>
        </div>
      </motion.div>
      <div className={classes.portfolio_project}>
        <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./assets/showCase1.png" alt="" />
        <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./assets/showCase2.png" alt="" />
        <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./assets/showCase3.png" alt="" />
      </div>
    </motion.div>
  );
};

export default Portfolio;
