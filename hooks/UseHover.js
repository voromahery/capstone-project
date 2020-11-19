import { func } from 'prop-types';
import { useState, useRef, useEffect } from 'react';

function UseHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    
    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter);
        ref.current.addEventListener("mouseleave", leave);
        return () => {
            // Clean up phase, this will run the component unmount. 
            ref.current.removeEventListener("mouseenter", enter);
            ref.current.removeEventListener("mouseleave", leave);
        }
    }, [])
    return [hovered, ref]
}
export default UseHover;
