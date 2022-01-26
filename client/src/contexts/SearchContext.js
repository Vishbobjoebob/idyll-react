import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchContext = React.createContext()

export function useSearch() {
    return useContext(SearchContext)
}

export function SearchProvider ({ children }) {
    let navigate = useNavigate();

    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [search, setSearch] = useState('');
    const searchRef=useRef();

    // useEffect(() => {
    //     setSearch(search.current.value);
    //     console.log(search);
    // },
    // [searchRef.current.value])
    
    async function browseRoute(currentType, currentPrice, currentRating) {
        navigate(`/search?search=${searchRef.current.value}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`);
    }

    const value = {browseRoute, type, price, rating, setType, setPrice, setRating, searchRef}

    return (
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>   
    ) 
}