import React, { useContext, useState, useRef } from 'react'


const SearchContext = React.createContext()

export function useSearch() {
    return useContext(SearchContext)
}

export function SearchProvider ({ children }) {

    const [search, setSearch] = useState('')
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [cuisine, setCuisine] = useState ('');
    const searchRef = useRef();
    const typeRef = useRef();

    async function browseRoute(currentCuisine, currentType, currentPrice, currentRating, currentSearch) {
        //`/search?search=${searchRef.current.value}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`
    //    history.push(`/search?search=${searchRef.current.value}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`)
       window.history.pushState({}, '', `/search?search=${currentSearch}&cuisine=${currentCuisine}&type=${currentType}&price=${currentPrice}&rating=${currentRating}`)
    }

    const value = {browseRoute, search, type, price, rating, setType, setPrice, setRating, setSearch, searchRef, cuisine, setCuisine, typeRef}

    return (
        <SearchContext.Provider value = {value}>
            {children}
        </SearchContext.Provider>   
    ) 
}