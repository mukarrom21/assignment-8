import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    return (
        <div className='cart'>
            {
                cart.map(phone=><p>{phone.name}</p>)
            }
            <button>Choose one for me</button>
            <br />
            <button>Reset</button>
        </div>
    );
};

export default Cart;