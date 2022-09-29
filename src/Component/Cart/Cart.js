import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props)
    const{name,info,img,age,duration} = props.cart;
    return (
        <div className='cart-details'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{info}</p>
            <p><small>For Age: {age}</small></p>
            <p><small>Duration: {duration}</small></p>
            <div>
                <button onClick={()=>props.addToCart(duration)} className='btn-cart'>Add To List</button>
            </div>
        </div>
    );
};

export default Cart;