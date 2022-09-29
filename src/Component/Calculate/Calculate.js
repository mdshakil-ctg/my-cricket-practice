import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoreData } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Calculate.css'

const Calculate = (props) => {
    const [breakTime, SetBreakTime] = useState(0);
    
    useEffect(()=>{
        const storeData = getStoreData();
        SetBreakTime(storeData.props);
    },[])
    const addBreakTime = (time)=>{
        SetBreakTime(time);
        addToLocalStorage(time);
    }
    const diffToast = () =>{
        toast("Your Activity Completed");
    }
    return (
            <>
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
            <button onClick={diffToast} className='btn-complete'>
                Activity Completed
            </button>
            </div>

        </div>
        <ToastContainer />
            </>
    );
};

export default Calculate;