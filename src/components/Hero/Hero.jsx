import { motion } from "framer-motion";
import React from "react";
import { fadeIn, staggerContainer } from "../../utils/motion";
import classes from "./Hero.module.scss";
const Hero = () => {
  return (
    <div id="services"> 
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${classes.container} innerWidth paddings`}
    >
        <div className={`${classes.hero}`}>
          <div className={`${classes.hero_upperText}`}>
            <motion.span
              variants={fadeIn("right", "tween", 0.2, 1)}
              className="primaryText"
            >
              Hey There,
              <br />
              I'm Hadi.{" "}
            </motion.span>
            <motion.span
              variants={fadeIn("left", "tween", 0.4, 1)}
              className="secondaryText"
            >
              I design beautiful simple <br />
              things, And I love what i do
            </motion.span>
          </div>
          <div className={classes.hero_email}>
            <a href="mailto:hadirifat100@gmail.com">hadirifat100@gmail.com</a>
          </div>
          <div className={`${classes.hero_lowerText}`}>
            <motion.div
              variants={fadeIn("right", "tween", 0.3, 1)}
              className="flexCenter"
              style={{ gap: "1rem" }}
            >
              <div className="primaryText">10</div>
              <span className="secondaryText" style={{ lineHeight: 1 }}>
                Years <br /> Experience
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.5, 1)}
              className={classes.hero_lowerText_iconImage}
            >
              <div>
                {" "}
                <img src="./assets/certificate.png" alt="" />
              </div>

              <p>CERTIFIED PROFATIONAL </p>
              <p>UI/UX DESIGNER</p>
            </motion.div>
          </div>
        </div>
        <img
          className={classes.hero_person_image}
          src="./assets/hadi.png"
          alt=""
        />
    </motion.div>
    </div>
  );
};

export default Hero;
