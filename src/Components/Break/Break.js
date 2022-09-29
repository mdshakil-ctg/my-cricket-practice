import React from 'react';
import "./Break.css"

const Break = () => {
    return (
        <div>
            <h3>Add A Break</h3>
            <div className='break-details'>
            <p className='breaks'>10m</p>
            <p className='breaks'>20m</p>
            <p className='breaks'>30m</p>
            <p className='breaks'>40m</p>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div>
                    <h5 className='exercise-container'>Exercise time <span className='exercise-details'>200m</span></h5>
                    <h5 className='exercise-container'>Break time <span className='exercise-details'>300m</span></h5>
                </div>
            </div>
            <button className='btn-complete'>
                Activity Completed
            </button>
        </div>
    );
};

export default Break;