import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div className='cart'>
            {props.name}
            <button>Choose one for me</button>
            <br />
            <button>Reset</button>
        </div>
    );
};

export default Cart;