import React from 'react';

const Work = () => {
    return (
        <div>
            <div className='innerWidth paddings '>
                <h1 style={{textAlign:"center"}} className='primaryText yPaddings'>My Work Experience</h1>
                <div className="worker_content flexBetWeen">
                    <div className="worker_content_duration"></div>
                    <div className="worker_content_designation"></div>
                </div>
            </div>
        </div>
    );
};

export default Work;