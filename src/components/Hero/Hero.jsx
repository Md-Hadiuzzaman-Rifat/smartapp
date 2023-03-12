import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "../../utils/motion";
import classes from "./Hero.module.scss";
const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth paddings"
    >
      <div className={`${classes.hero}`}>
        <motion.div className="flexBetween">
          <span className={`primaryText`}>
            Hey There,
            <br />
            I'm Hadi.{" "}
          </span>
          <span className="secondaryText">
            I design beautiful simple <br />
            things, And I love what i do
          </span>
        </motion.div>
        <div className={classes.email}>
          <a href="mailto:hadirifat100@gmail.com">hadirifat100@gmail.com</a>
        </div>
        <img className={classes.person} src="./assets/person.png" alt="" />
        <div className={`${classes.lowerText} flexBetween`}>
          <div className="flexCenter" style={{ gap: "1rem" }}>
            <div className="primaryText">10</div>
            <span className="secondaryText" style={{ lineHeight: 1 }}>
              Years <br /> Experience
            </span>
          </div>

          <div className="flexCenter">
            <img src="./assets/certificate.png" alt="" />
            <span>
              CERTIFIED PROFATIONAL <br />
              UI/UX DESIGNER
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
