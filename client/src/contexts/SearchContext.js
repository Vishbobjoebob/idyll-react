// import React, { useContext, useEffect, useState } from 'react'

// const SearchContext = React.createContext()

// export function useSearch() {
//     return useContext(SearchContext)
// }

// export function SearchProvider ({ children }) {

//     const [type, setType] = useState();
//     const [price, setPrice] = useState();
//     const [rating, setRating] = useState();

//     async function browseRoute() {
//         navigate(`/search?type=${type}&price=${price}&rating=${rating}`);
//     }

//     const value = {browseRoute}

//     return (
//         <SearchContext.Provider value = {value}>
//             {children}
//         </SearchContext.Provider>   
//     ) 
// }