import React, { useEffect, useState } from 'react';
import { addToLocalStorage } from '../../utilities/fakedb';
import Calculate from '../Calculate/Calculate';
import Cart from '../Cart/Cart';
import './Club.css'

const Club = () => {
    const [carts, setCarts] = useState([]);
    const [duration, setDuration] = useState(0);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    const addToCart = (input) =>{
        const newDuration = duration + input;
        setDuration(newDuration);
    }
    return (
        <div>
            <div className='cart-header'>
                <h1>My Cricket Practice</h1>
                <h3>Select Today's Exercise</h3>
            </div>
            <div className='main-container'>
            <div className='cart-container'>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart} addToCart={addToCart} ></Cart>)
            }
            </div>
            <div className='calculate'>
            <Calculate duration={duration}></Calculate>
            </div>
            </div>
        </div>
    );
};

export default Club;<h1>this is main page</h1>