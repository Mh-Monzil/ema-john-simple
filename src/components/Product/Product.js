import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price,stock,} = props.product;
    return (
        <div className="product">
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='content'>
                <h3>{name}</h3>
                <br />
                <p><small>by : </small>{seller}</p>
                <br />
                <p className='price'>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className='main-button' onClick={() => props.addProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> add to cart</button>
            </div>
        </div>
    );
};

export default Product;