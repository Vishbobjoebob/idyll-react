import React, { useEffect, useState, useRef} from "react"
import {Card, Image } from "react-bootstrap"
import '../css/browse.css'
import sixnine from "../images/69.jpg"
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Slider from "react-slick";
export default function BrowseCard(props) {
    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <Card id="card-container">
                <div id="card-img-slider">
                    <div className="arrow-left" id="card-arrow-left" onClick={() => slider?.current?.slickPrev()}><ChevronLeft color={"black"} size={18} /></div>
                    <div className="arrow-right" id="card-arrow-right"  onClick={() => slider?.current?.slickNext()}><ChevronRight color={"black"} size={18} /></div>
                    <Slider ref={slider} {...settings}>
                        {props.imgs.map(img => {
                            return (<Image id="card-img" src={img}/>)
                            })}
                    </Slider>
                </div>
                <Card.Body>
                    <Card.Title id="card-title">{props.name}</Card.Title>
                    <Card.Text id="card-price">${props.price}</Card.Text>
                    <Card.Text id="card-time">{props.time} min away</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}