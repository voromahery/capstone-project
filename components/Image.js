import React, { useState } from "react";

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false);
    const hearticon = hovered && <i className="ri-heart-line favorite"></i>;
    const addIcon = hovered && <i className="ri-add-circle-line cart"></i>;
    function hover() {
        setHovered(true);
        console.log(hovered);
    }
    function notHover() {
        setHovered(false);
        console.log(hovered);
    }

    return (
        <div className={`${className} image-container`} onMouseEnter={hover} onMouseLeave={notHover}>
            {hearticon}
            {addIcon}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image;
// # Challenge
// Conditionally render the heart and plus icons when an Image component is being hovered on
// 1. Icon to render for the heart:
// <i className="ri-heart-line favorite"></i>
// 2. Icon to render for the plus:
// <i className="ri-add-circle-line cart"></i>