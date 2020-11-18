import React, { useContext, useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isOrdered, setIsOrdered] = useState(false);
    const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    async function dataFetch(url) {
        const response = await fetch(endpoint);
        const data = await response.json();
        setAllPhotos(data);
    }

    function addToCart(newItem) {
        // Add an element in an  array in an immutable way
        setCartItems(prevItems => [...prevItems, newItem]);
    }

    useEffect(() => {
        dataFetch(endpoint);
    }, [])

    function toggleFavorite(id) {
        const newPhotosArray = allPhotos.map(photo => {
            if (photo.id === id) {
                // Update this element 
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite,
                }
            };
            return photo;
        })
        setAllPhotos(newPhotosArray);
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    function order() {
        setIsOrdered(true);
        setTimeout(() => {
            setCartItems([]);
            setIsOrdered(false);
        }, 3000)
    }
    
    // # Challenge
    // Let our user place their order!
    // Clicking the "Place Order" button should:
    // 1. Change the text to "Ordering..."
    // 2. Timeout for 3 seconds (to simulate an order being placed)
    // 3. Log "Order placed!" to the console
    // 4. Empty out the cart

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, isOrdered, order}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };
