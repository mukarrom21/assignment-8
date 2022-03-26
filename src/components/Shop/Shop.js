import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
// data load from json file
const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])


    const addToCart = (product) =>{
        // do not do this: cart.push(product);
        
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const reset =()=>{
        setCart([])
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart} reset={reset}></Cart>
            </div>
        </div>
    );
};

export default Shop;