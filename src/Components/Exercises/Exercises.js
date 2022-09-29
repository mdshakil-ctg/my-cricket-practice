import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import "./Exercises.css"

const Exercises = () => {
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    return (
        <div className='cart-container'>
            
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Exercises;