import React, { useContext, useState, useRef } from 'react'
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
    const [cuisine, setCuisine] = useState ('');
    const searchRef=useRef();

    // useEffect(() => {
    //     setSearch(search.current.value);
    //     console.log(search);
    // },
    // [searchRef.current.value])
    
    async function browseRoute(currentCuisine, currentType, currentPrice, currentRating) {
        navigate(`/search?search=${searchRef.current.value}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`);
    }

    const value = {browseRoute, type, price, rating, setType, setPrice, setRating, searchRef, cuisine, setCuisine}

    return (
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>   
    ) 
}