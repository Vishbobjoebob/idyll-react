import React, { useState, useRef, useEffect} from "react"
import '../css/index.css'
import '../css/browse.css'
import { Container, Row, Col} from "react-bootstrap"
import { useSearchParams, useNavigate } from 'react-router-dom'
import BrowseFilter from "./BrowseFilter"
import CuisineFilter from "./CuisineFilter"
import BrowseCard from "./BrowseCard"
import {InstantSearch, MenuSelect, connectSearchBox, connectHits, connectStats, RefinementList} from 'react-instantsearch-dom'
import algoliasearch from "algoliasearch";
import { useAuth } from "../contexts/AuthContext"

export default function BrowseResults(props) {
    const history = useNavigate() 

    const [searchParams] = useSearchParams();
    const { zipCode } = useAuth();

    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [cuisine, setCuisine] = useState('')


    const searchClient = algoliasearch(
        'G7XGFCN3QV',
        '12af5740b6d988432c9b23af2f5a9480'
      );
    
    useEffect(() => {
        return history.listen((location) => { 
            setSearch(searchParams.get('search'));
            setType(searchParams.get('type'));
            setPrice(searchParams.get('price'));
            setCuisine(searchParams.get('cuisine'));
            setRating(searchParams.get('rating'))
         }) 
    }, [history, searchParams])
    // const search = searchParams.get('search')
    // const type = searchParams.get('type');
    // const price = searchParams.get('price');
    // const rating = searchParams.get('rating');
    // const cuisine = searchParams.get('cuisine');

    const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
        return (
            <input
                id="menu-select"
                type="text"
                value={currentRefinement}
            />
        )
    };

    const InvisibleCustomSearchBox = connectSearchBox(SearchBox);

    const Hits = ({ hits }) => (
        <div id="hit-browse-wrapper">
          {hits.map(function(hit) {
                return(
                    <BrowseCard name={hit.dishName} price={hit.dishPrice} imgs={hit.pictureURLs} id={hit.objectID} username={hit.fullName.split(' ')[1]} style={{marginBottom: '10px'}} />
                )}
            )}
        </div>
      );
    const CustomHits = connectHits(Hits);

    const Stats = ({ nbHits }) => (
        <h1 id="nb-results"> {nbHits} Results </h1>
      );
      
    const CustomStats = connectStats(Stats)
    
    return (
        <> 
            <CuisineFilter/>
            <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                <Row>
                    <InstantSearch searchClient={searchClient} indexName="searchPosts">
                        <BrowseFilter type={type} price={price} rating={rating}/>
                        <CustomStats/>

                        <div id="display-off"><RefinementList attribute="zipCode" defaultRefinement={[String(zipCode).substring(0,3)]}/></div>
                        {type ? (<MenuSelect id="menu-select" defaultRefinement={type} attribute="dishType"/>):(null)}
                        {cuisine ? (<MenuSelect id="menu-select" defaultRefinement={cuisine} attribute="cuisine"/>):(null)}
                        {search ? (<InvisibleCustomSearchBox defaultRefinement={search}/>):(null)}
                        <CustomHits/>
                    </InstantSearch>

                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}