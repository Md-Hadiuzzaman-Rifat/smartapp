import React from "react";
import { projectExperience } from "../../utils/data";
import classes from "./Experties.module.scss";

const Experties = () => {
  return (
    <div className={classes.experties}>
      <div className="innerWidth paddings yPaddings" >
        <div className={classes.leftSide}>
          {projectExperience.map((properties, keys) => {
            return (
              <div key={keys} className={`${classes.leftSide_property}`}>
                <div><properties.icon className={classes.icons} style={{background:`${properties.bg}`, color:"white"}} size={50}  /></div>
                <div className={classes.leftSide_property_projects}>
                  <h2>{properties.name}</h2>
                  <p>{properties.projects} Projects</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.rightSide}>
          <h1>What do I help?</h1>
          <p>
            I will help you with finging a solution and solve your problem, We
            use process design to create digital products. Besides that also
            help their business. <br /> <br /> We use process design to create digital
            products. Besides that also help their business.
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
        </div>
      </div>
    </div>
  );
};

export default Experties;
