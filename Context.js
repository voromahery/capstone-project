import React, { useContext, useEffect, useState } from 'react';
const Context = React.createContext();

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = useState([]);
    const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

    async function dataFetch(url) {
        const response = await fetch(endpoint);
        const data = await response.json();
        setAllPhotos(data);
    }

    useEffect(() => {
        dataFetch(endpoint);
    }, [])

    useEffect(() => {
        if(allPhotos) {
            console.log(allPhotos);
        }
    },[allPhotos])

    return (
        <Context.Provider value={{ allPhotos: allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context };
