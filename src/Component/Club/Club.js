import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Cart from '../Cart/Cart';
import './Club.css'

const Club = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div>
            <div className='cart-header'>
                <h1>My Cricket Practice</h1>
                <h3>Select Today's Exercise</h3>
            </div>
            <div className='main-container'>
            <div className='cart-container'>
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
            </div>
            <div className='calculate'>
            <Calculate></Calculate>
            </div>
            </div>
        </div>
    );
};

export default Club;<h1>this is main page</h1>