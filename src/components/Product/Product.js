import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const {images, name, price, id} = product;
    return (
            <div className='product'>
            <img src={images} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
            </button>
        </div>
    );
};

export default Product;