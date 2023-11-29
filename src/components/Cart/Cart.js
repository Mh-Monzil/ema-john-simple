import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(props)
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        const price = cart[i].price;
        totalPrice = (totalPrice + price);
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    let shipping = 0;
    if(totalPrice > 0 && totalPrice <= 15){
        shipping = 12.99;
    }
    else if(totalPrice > 15 && totalPrice <= 35){
        shipping = 4.99;
    }
    else{
        shipping = 0;
    }

    const tax = (totalPrice / 10);
    const grandTotal = totalPrice + shipping + tax;
    console.log(tax)
    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <h3>Item Ordered: {cart.length}</h3>
            <h4>Product Price : ${formatNumber(totalPrice)}</h4>
            <h4>Shipping Cost : ${formatNumber(shipping)}</h4>
            <h4>Tax + VAT : ${formatNumber(tax)}</h4>
            <h3>Total Price : ${formatNumber(grandTotal)}</h3>
        </div>
    );
};

export default Cart;