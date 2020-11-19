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
        const refInstance = ref.current;
        refInstance.addEventListener("mouseenter", enter);
        refInstance.addEventListener("mouseleave", leave);
        return () => {
            // Clean up phase, this will run the component unmount. 
            refInstance.removeEventListener("mouseenter", enter);
            refInstance.removeEventListener("mouseleave", leave);
        }
    }, [])
    return [hovered, ref]
}
export default UseHover;
