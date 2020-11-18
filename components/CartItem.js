import React, { useContext } from 'react'
import { Context } from '../Context';
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
        return(
            <div>
                <div className="cart-page">
                    <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.id)}></i>
                    <img src={item.url} width="130px" />
                    <p className="total-cost">$5.99</p>
                </div>
            </div>
        )
}
export default CartItem;