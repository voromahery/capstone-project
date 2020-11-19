import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from 'prop-types';

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)} ></i>;
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>;
        }
    }

    function addCartIcon() {
        if (cartItems.some(cartItem => cartItem.id === img.id)) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>;
        }
    }

    return (
        <div className={`${className} image-container`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {heartIcon()}
            {addCartIcon()}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image;

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

