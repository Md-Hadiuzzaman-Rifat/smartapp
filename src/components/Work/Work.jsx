import { motion } from "framer-motion";
import React from "react";
import { workExp } from "../../utils/data.js";
import { fadeIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";
import classes from "./Work.module.scss";

const Work = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a id="experience" className="anchor"></a>
      <div className="innerWidth paddings">
        <h1 className="primaryText">My Work Experience</h1>
        <div className={classes.worker_details}>
          {workExp.map((person, id) => {
            return (
              <motion.div
                variants={textVariant2}
                key={id}
                className={classes.worker_details_content}
              >
                <div className={classes.worker_details_content_left}>
                  <h3>{person.place}</h3>
                  <span>{person.tenure}</span>
                </div>
                <div className={classes.worker_details_content_right}>
                  <h3>{person.role}</h3>
                  <span>{person.detail}</span>
                </div>
              </motion.div>
            );
          })}
          
          {/* progressbar */}
          <motion.div variants={zoomIn(1, 1)} className={classes.worker_details_progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={classes.progressbar_line}
            ></motion.div>
            <div>
              <div
                className={classes.progressbar_circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              <div
                className={classes.progressbar_circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              <div
                className={classes.progressbar_circle}
                style={{ background: "#EEC048" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
