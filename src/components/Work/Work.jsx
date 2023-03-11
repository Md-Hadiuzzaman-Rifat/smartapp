import React from 'react';
import { workExp } from "../../utils/data.js";
import classes from './Work.module.scss';

const Work = () => {
    return (
        <div>
            <div className='innerWidth paddings'>
                <div className={classes.worker_details}>
                    {
                        workExp.map((person,id)=>{
                            return(
                                <div key={id} className={classes.worker_details_content}>
                                    <div className={classes.worker_details_content_left}>
                                        <h3>{person.place}</h3>
                                        <span>{person.tenure}</span>
                                    </div>
                                    <div className={classes.worker_details_content_right}>
                                        <h3>{person.role}</h3>
                                        <span>{person.detail}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Work;