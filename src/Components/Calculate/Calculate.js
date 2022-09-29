import React from 'react';
import Break from '../Break/Break';
import './Calculate.css'

const Calculate = () => {
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
            <Break></Break>

        </div>
    );
};

export default Calculate;