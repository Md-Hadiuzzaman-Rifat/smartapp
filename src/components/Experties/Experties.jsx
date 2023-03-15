import { motion } from "framer-motion";
import React from "react";
import { projectExperience } from "../../utils/data";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import classes from "./Experties.module.scss";

const Experties = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a id="experience">
        <div className={classes.experties}>
          <div className="innerWidth paddings yPaddings">
            <div className={classes.leftSide}>
              {projectExperience.map((properties, keys) => {
                return (
                  <motion.div
                    variants={fadeIn("right", "tween", (keys + 1) * 0.2, 1)}
                    key={keys}
                    className={`${classes.leftSide_property}`}
                  >
                    <div>
                      <properties.icon
                        className={classes.icons}
                        style={{
                          background: `${properties.bg}`,
                          color: "white",
                        }}
                        size={50}
                      />
                    </div>
                    <div className={classes.leftSide_property_projects}>
                      <h2>{properties.name}</h2>
                      <p>{properties.projects} Projects</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              variants={textVariant(0.5)}
              className={classes.rightSide}
            >
              <h1 style={{ marginTop: "0px" }}>What do I help?</h1>
              <p>
                I will help you with finging a solution and solve your problem,
                We use process design to create digital products. Besides that
                also help their business. <br /> <br /> We use process design to
                create digital products. Besides that also help their business.
              </p>
              <div className={classes.rightSide_success}>
                <div className="rightSide_project">
                  <h1>285+</h1>
                  <p>Projects Complete</p>
                </div>
                <div className="rightSide_clients">
                  <h1>190+</h1>
                  <p>Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Experties;
