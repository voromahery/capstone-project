import React, { useContext, useState } from 'react'
import { Context } from '../Context';
function CartItem({ item }) {
    const { removeFromCart } = useContext(Context);
    const [isHover, setIsHover] = useState(false);
    const iconClass = isHover?"ri-delete-bin-fill":"ri-delete-bin-line";
	function hover() {
        setIsHover(true);
    }
    
    function unhover() {
        setIsHover(false);
    }
        return(
            <div>
                <div className="cart-page">
                    <i className={iconClass} onClick={() => removeFromCart(item.id)} onMouseEnter={hover} onMouseLeave={unhover}></i>
                    <img src={item.url} width="130px" />
                    <p className="total-cost">$5.99</p>
                </div>
            </div>
        )
}
export default CartItem;