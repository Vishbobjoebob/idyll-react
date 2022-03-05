import React from "react"
import '../css/index.css'
import '../css/browse.css'
import { Container, Row, Col} from "react-bootstrap"
import { useSearchParams } from 'react-router-dom'
import BrowseFilter from "./BrowseFilter"
import CuisineFilter from "./CuisineFilter"
import BrowseCard from "./BrowseCard"
import Browse from "./Browse"
import { connectHits, connectStats, RefinementList, connectStateResults,}  from 'react-instantsearch-dom'
import { useAuth } from "../contexts/AuthContext"
// import {useSearch} from "../contexts/SearchContext"

export default function BrowseResults(props) {
    const [searchParams] = useSearchParams();
    const { zipCode } = useAuth();

    let searchURL = searchParams.get("search");
    let typeURL = searchParams.get('type');
    let cuisineURL = searchParams.get('cuisine');

    // const {searchRef, type, rating, cuisine, price} = useSearch();

    const Results = connectStateResults(({ searchState }) =>{
        console.log(searchState);

        if (searchState) {
            if (searchState.query) {
                if (searchState.query!=='') {
                    return (
                        <>
                            <CustomStats/>
                            <PostHits/>
                        </>
                    )
                }
                else {
                    return (<Browse/>)
                }
            }
            else if (searchState.menu) {
                if (searchState.menu.dishType!=='') {
                    return (
                        <>
                            <CustomStats/>
                            <PostHits/>
                        </>
                    )
                }
                else if (searchState.menu.cuisine!=='') {
                    return (
                        <>
                            <CustomStats/>
                            <PostHits/>
                        </>
                    )
                }
                else {
                    console.log("balls")
                    return (<Browse/>)
                }
            }
            else {
                console.log(searchURL);
                console.log(typeURL);
                console.log(cuisineURL);
                if ((searchURL!=='' && searchURL!==null) || (typeURL!=='' && typeURL!==null) || (cuisineURL!=='' && cuisineURL!==null)) {
                    return (<>
                        <CustomStats/>
                        <PostHits/>
                    </>)
                }
                else {
                    return (<Browse/>)
                }
            }
        }
        else {
            return (<Browse/>)
        }

        // return (searchState && (searchState.query || (searchState.menu && searchState.menu.dishType!==''))? (
        //     <>
        //         <CustomStats/>
        //         <PostHits/>
        //     </>
        // ) : (
        //     <Browse/>
        // )
        // )
    });
    const postHits = ({ hits }) => (
        <div className="hit-browse-wrapper">
            {hits.length > 0 ? (<h1 className="search-item-header"> Items </h1>):(null)}
            {
                hits.map(function(hit) {
                    return(
                        <BrowseCard key={hit.objectID} name={hit.dishName} price={hit.dishPrice} imgs={hit.pictureURLs}/>
                    )
                }
            )}
        </div>
      );
    const PostHits = connectHits(postHits);
    
    // const chefHits = ({ hits }) => (
    //     <div className="hit-browse-wrapper">
    //         {hits.length > 0 ? (<h1 className="search-item-header"> Chefs </h1>):(null)}
    //         {
    //             hits.map(function(hit) {
    //                 return(
                        
    //                 )
    //         }
    //     )}
    //     </div>
    //   );
    // const ChefHits = connectHits(chefHits);

    const Stats = ({ nbHits }) => (
        <h1 id="nb-results"> {nbHits} Results </h1>
      );
      
    const CustomStats = connectStats(Stats)
    
    // useEffect(()=> {
    //   searchURL = searchParams.get('search');
    //   typeURL = searchParams.get('type');
      
    // }, [])
    return (
        <> 
            <CuisineFilter/>
            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row>
                    
                    <BrowseFilter type={typeURL}/>

                    <div id="display-off"><RefinementList attribute="zipCode" defaultRefinement={[String(zipCode).substring(0,3)]}/></div>
                    {/* {type ? (<MenuSelect id="menu-select" defaultRefinement={type} attribute="dishType"/>):(null)}
                    {cuisine ? (<MenuSelect id="menu-select" defaultRefinement={cuisine} attribute="cuisine"/>):(null)}
                    {searchRef.current ? (<InvisibleCustomSearchBox defaultRefinement={searchRef.current.value}/>):(null)} */}
                    <Results/>

                    <Col></Col>
                    
                </Row>
            </Container>
        </>
    )
}