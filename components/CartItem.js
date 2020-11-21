import React, { useContext, useState } from 'react'
import { Context } from '../Context';
import UseHover from './../hooks/UseHover';
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [hovered, ref] = UseHover();
    const iconClass = hovered?"ri-delete-bin-fill":"ri-delete-bin-line";
	
        return(
            <div>
                <div className="cart-page">
                    <i className={iconClass} onClick={() => removeFromCart(item.id)} ref={ref}></i>
                    <img src={item.url} width="130px" />
                    <p className="total-cost">$5.99</p>
                </div>
            </div>
        )
}
export default CartItem;