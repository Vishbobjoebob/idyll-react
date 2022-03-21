import React, { useRef, useState} from "react"
import '../css/index.css'
import '../css/browse.css'
import { useNavigate } from "react-router-dom";
import {useSearch} from "../contexts/SearchContext";
import {Container, Row, Col} from "react-bootstrap"
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";
import all_food from "../images/food-icons/all_food.png"
import african_food from "../images/food-icons/african_food.png"
import american_food from "../images/food-icons/american_food.png";
import british_food from "../images/food-icons/british_food.png";
import chinese_food from "../images/food-icons/chinese_food.png";
import french_food from "../images/food-icons/french_food.png";
import german_food from "../images/food-icons/german_food.png"
import greek_food from "../images/food-icons/greek_food.png"
import indian_food from "../images/food-icons/indian_food.png";
import italian_food from "../images/food-icons/italian_food.png";
import japanese_food from "../images/food-icons/japanese_food.png";
import korean_food from "../images/food-icons/korean_food.png";
import mexican_food from "../images/food-icons/mexican_food.png";
import thai_food from "../images/food-icons/thai_food.png";

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
                    <img className="food-icon-img" alt="" src={all_food}></img>
                    <div className="cuisine-slider-item-txt">All</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="" >
                    <img className="food-icon-img" alt="" src={african_food}></img>
                    <div className="cuisine-slider-item-txt">African</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="American">
                    <img className="food-icon-img" alt="" src={american_food}></img>
                    <div className="cuisine-slider-item-txt">American</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="British">
                    <img className="food-icon-img" alt="" src={british_food}></img>
                    <div className="cuisine-slider-item-txt">British</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="Chinese">
                    <img className="food-icon-img" alt="" src={chinese_food}></img>
                    <div className="cuisine-slider-item-txt">Chinese</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="French">
                    <img className="food-icon-img" alt="" src={french_food}></img>
                    <div className="cuisine-slider-item-txt">French</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="German">
                    <img className="food-icon-img" alt="" src={german_food}></img>
                    <div className="cuisine-slider-item-txt">German</div>
                </div>
                <div className="cuisine-slider-item" id="all-food" data-value="Greek">
                    <img className="food-icon-img" alt="" src={greek_food}></img>
                    <div className="cuisine-slider-item-txt">Greek</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={indian_food}></img>
                    <div className="cuisine-slider-item-txt">Indian</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={italian_food}></img>
                    <div className="cuisine-slider-item-txt">Italian</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={japanese_food}></img>
                    <div className="cuisine-slider-item-txt">Japanese</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={korean_food}></img>
                    <div className="cuisine-slider-item-txt">Korean</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={mexican_food}></img>
                    <div className="cuisine-slider-item-txt">Mexican</div>
                </div>
                <div className="cuisine-slider-item" id="all-food">
                    <img className="food-icon-img" alt="" src={thai_food}></img>
                    <div className="cuisine-slider-item-txt">Thai</div>
                </div>
            </div>
    );

    const CuisineSelect = connectMenu(cuisineSelect);
    return (
        <>  
             <Container className="px-4" style={{maxWidth: '83rem', background: '#FBFBFB'}} fluid>
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
            <div id="green-line"></div>
            
        </>
    ) 
}
