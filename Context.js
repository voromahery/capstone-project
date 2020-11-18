import React, { useContext, useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
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
    console.log(cartItems);

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

    function removeItem(id) {
        const filterItem = cartItems.filter(item => item.id !== id);
        setCartItems(filterItem);
    }

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeItem}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };
