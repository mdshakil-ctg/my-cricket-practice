import React, { useState } from 'react';
import './Calculate.css'

const Calculate = (props) => {
    const [breakTime, SetBreakTime] = useState(0);
    console.log(props.duration)
    const addBreakTime = (time)=>{
        SetBreakTime(time);
    }
    return (
        <div className='calculate-cart'>
            <h2>Shakil Ahmed</h2>
            <p><small>Chittagong, Bangladesh</small></p>
            <div className="my-info">
            <div>
                <p>65kg</p>
                <p><small>weight</small></p>
            </div>
            <div>
                <p>6.9</p>
                <p><small>Height</small></p>
            </div>
            <div>
                <p>32Yrs</p>
                <p><small>Age</small></p>
            </div>
            </div>
            
            <div>
            <h3>Add A Break</h3>
            <div className='break-details'>
            <button onClick={()=>addBreakTime(10)} className='breaks'>10m</button>
            <button onClick={()=>addBreakTime(20)} className='breaks'>20m</button>
            <button onClick={()=>addBreakTime(30)} className='breaks'>30m</button>
            <button onClick={()=>addBreakTime(40)} className='breaks'>40m</button>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div>
                    <h5 className='exercise-container'>Exercise time <span className='exercise-details'>{props.duration}m</span></h5>
                    <h5 className='exercise-container'>Break time <span className='exercise-details'>{breakTime}m</span></h5>
                </div>
            </div>
            <button className='btn-complete'>
                Activity Completed
            </button>
        </div>

        </div>
    );
};

export default Calculate;