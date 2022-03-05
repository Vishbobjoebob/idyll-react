import React, { useRef, useState} from "react"
import '../css/index.css'
import '../css/browse.css'
import { useNavigate } from "react-router-dom";
import {useSearch} from "../contexts/SearchContext";
import {Container, Row, Col} from "react-bootstrap"
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";
import FoodIMG from "../images/food.png";
import {connectMenu} from 'react-instantsearch-dom'

export default function CuisineFilter(props) {
    // eslint-disable-next-line no-unused-vars
    const {browseRoute, type, price, rating, cuisine, setCuisine, search} = useSearch();
    // eslint-disable-next-line no-unused-vars
    let navigate = useNavigate();

    const slider = useRef();

    const [leftArrowStyle, setLeftArrowStyle] = useState("d-off");
    const [rightArrowStyle, setRightArrowStyle] = useState("cuisine-slider-arrow");

    const changeArrowStyle = () => {
        if (slider.current.scrollLeft === 0) {
            setLeftArrowStyle("d-off");
            setRightArrowStyle("cuisine-slider-arrow");
        }
        else if (slider.current.scrollLeft === slider.current.offsetWidth) {
            setLeftArrowStyle("cuisine-slider-arrow");
            setRightArrowStyle("d-off");
        }
        else {
            setLeftArrowStyle("cuisine-slider-arrow");
            setRightArrowStyle("cuisine-slider-arrow");
        }
      };

    const scroll = (scrollOffset) => {
        slider.current.scrollLeft += scrollOffset;

        console.log(slider.current.scrollLeft);
        console.log(slider.current.offsetWidth);

        changeArrowStyle();
      };

    const handleCuisineClick = (event) => {
        browseRoute(event.target.parentNode.getAttribute("data-value"), type, price, rating, search);
    }

    const cuisineSelect = ({ items, currentRefinement, refine }) => (
        <div id="cuisine-slider" ref={slider} value={currentRefinement || ''} onClick={ (event) => {
            refine(event.target.parentNode.getAttribute("data-value"));
            handleCuisineClick(event);
        }}>
                <div className="cuisine-slider-item" id="all-food" data-value="" >
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">All</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="American">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">American</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="Chinese">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Chinese</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="French">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">French</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Indian</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Italian</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Japanese</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Korean</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Mexican</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Thai</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={FoodIMG}></img>
                    <div className="cuisine-slider-item-txt">Thai</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    
                </div>
            </div>
    );

    const CuisineSelect = connectMenu(cuisineSelect);
    return (
        <>  
            <div className="search-container">
                <Container className="px-4" style={{maxWidth: '83rem'}} fluid>
                    <Row>
                        <div id="cuisine-slider-arrows">
                                <div className={leftArrowStyle} id="cuisine-slider-left-arrow" onClick={() => scroll(-350)}>
                                    <ChevronLeft color={"black"} size={18}/>
                                </div>
                                <div className={rightArrowStyle} id="cuisine-slider-right-arrow" onClick={() => scroll(350)}>
                                <ChevronRight color={"black"} size={18}/>
                                </div>
                        </div>
                        <CuisineSelect attribute={"cuisine"}/>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            <div id="green-line"></div>
            
        </>
    ) 
}
