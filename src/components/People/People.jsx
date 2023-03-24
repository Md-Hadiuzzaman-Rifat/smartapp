import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import { sliderSettings } from "../../utils/data";
import { footerVariants, staggerChildren } from "../../utils/motion";
import classes from "./People.module.scss";

const People = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} className={`${classes.people} innerWidth paddings`}>
      <a id="testimonials" className="anchor"></a>
            <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth`}>
      <h1 className="primaryText">People talk about us</h1>
      <p>
        I got a job that was in accordance with the salary and field of work{" "}
        <br />
        The process of submitting an appilication was quite cosy
      </p>

      <Slider {...sliderSettings} className={classes.slider}>
          <div className={classes.slider_content}>
            <img src="./people1.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>
          <div className={classes.slider_content}>
            <img src="./people2.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>

          <div className={classes.slider_content}>
            <img src="./people1.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>

          <div className={classes.slider_content}>
            <img src="./people2.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>

          <div className={classes.slider_content}>
            <img src="./people1.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>
          <div className={classes.slider_content}>
            <img src="./people2.png" alt="" />
            <p> "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
            <hr />
            <h4>Anamika Sandula</h4>
            <small>Creative Manager</small>
          </div>
      </Slider>
      </motion.div>
    </motion.section>
  );
};

export default People;
