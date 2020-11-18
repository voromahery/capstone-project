import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import Image from './../components/Image';
import { getClass } from './../utils/index';
import CartItem from './../components/CartItem';

function Cart() {
	const { cartItems, order, isOrdered } = useContext(Context);
	const totalCost = cartItems.length * 5.99;
	const cartItemElement = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	));


	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElement}
			<p className="total-cost">Total: {totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
			<div className="order-button">
				<button onClick={order}>{isOrdered ? "Ordering...":"Place order"}</button>
			</div>
		</main>
	);
}

export default Cart;