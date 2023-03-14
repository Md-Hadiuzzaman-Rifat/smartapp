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
        <motion.div className={`${classes.hero_upperText}`}>
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
        <div className={classes.hero_email}>
          <a href="mailto:hadirifat100@gmail.com">hadirifat100@gmail.com</a>
        </div>
        <img className={classes.hero_person} src="./assets/person.png" alt="" />
        <div className={`${classes.hero_lowerText}`}>
          <div className="flexCenter" style={{ gap: "1rem" }}>
            <div className="primaryText">10</div>
            <span className="secondaryText" style={{ lineHeight: 1 }}>
              Years <br /> Experience
            </span>
          </div>

          <div className={classes.hero_icon_image}>
            <img src="./assets/certificate.png" alt="" />
            <p>CERTIFIED PROFATIONAL </p>
              <p>UI/UX DESIGNER</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
