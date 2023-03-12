import React from "react";
import classes from './Perpole.module.scss';
const People = () => {
  return (
    <div className="innerWidth">
      <div className={classes.people_text}>
        <h1 className="primaryText">People talk about us</h1>
        <span>
          I got a job that was in accordance with the salary and field of work <br />
          The process of submitting an appilication was quite cosy
        </span>
      </div>
    </div>
  );
};

export default People;
