import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import Image from './../components/Image';
import { getClass } from './../utils/index';
import CartItem from './../components/CartItem';

function Cart() {
	const { cartItems, emptyCart } = useContext(Context);
	const [btnText, setBtnText] = useState('Place Order');
	const totalCost = cartItems.length * 5.99;
	const cartItemElement = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	));
	const total = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

	async function placeOrder() {
		setBtnText("Ordering...");
		setTimeout(() => {
			emptyCart()
			setBtnText("Place Order")
		}, 3000)
	}

	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElement}
			<p className="total-cost">Total: {total}</p>
			<div className="order-button">
				{cartItems.length > 0 ? <button onClick={placeOrder}>{btnText}</button> : <p>You have no item in your cart.</p>}
			</div>
		</main>
	);
}

export default Cart;
