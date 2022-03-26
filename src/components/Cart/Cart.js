import React from 'react';

const Cart = ({product}) => {
    return (
        <div>
            {product.name}
            <button>Choose one for me</button>
            <button>Reset</button>
        </div>
    );
};

export default Cart;