import React, { useContext, useEffect, useState } from 'react';
import CartItem from './components/CartItem';
const Context = React.createContext();

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    async function dataFetch(url) {
        // Is there something in the Local storage
        const lsAllPhotos = JSON.parse(localStorage.getItem('allPhotos'));
        console.log(lsAllPhotos);
        if (lsAllPhotos) {
            setAllPhotos(lsAllPhotos);
            console.log(allPhotos);
        } else {
            const response = await fetch(endpoint);
            const data = await response.json();
            setAllPhotos(data);
        }
    }

    function initCartItems() {
        const lsCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (lsCartItems) {
            setCartItems(lsCartItems);
        }
    }

    function addToCart(newItem) {
        // Add an element in an array in an immutable way
        setCartItems(prevItems => [...prevItems, newItem]);
    }

    useEffect(() => {
        dataFetch(endpoint);
        initCartItems();
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    })

    useEffect(() => {
        if (allPhotos.length > 0) {
            localStorage.setItem('allPhotos', JSON.stringify(allPhotos));
        }
    }, [allPhotos]);

    function emptyCart() {
        setCartItems([]);
    }

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

    return (
        <Context.Provider value={{ allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };
