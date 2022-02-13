import React, { useContext, useState, useRef } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const SearchContext = React.createContext()

export function useSearch() {
    return useContext(SearchContext)
}

export function SearchProvider ({ children }) {
    let navigate = useNavigate();

    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [cuisine, setCuisine] = useState ('');
    const searchRef = useRef();

    async function browseRoute(currentCuisine, currentType, currentPrice, currentRating) {
        // <Navigate to={`/search?search=${searchRef.current.value}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`}/>
        console.log(searchRef.current.value);
        window.history.replaceState({}, '', `/search?search=${searchRef.current.value}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`);
    }

    const value = {browseRoute, type, price, rating, setType, setPrice, setRating, searchRef, cuisine, setCuisine}

    return (
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>   
    ) 
}