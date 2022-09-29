import React from 'react';
import Exercises from '../Exercises/Exercises';
import './Cricket.css'

const Cricket = () => {
    return (
        <div>
            <h1 className='main-header'>My Cricket Practice</h1>
            <h3>Select Today's Exercise</h3>
            <Exercises></Exercises>
        </div>
    );
};

export default Cricket;