import React from "react"
import {Card, Image } from "react-bootstrap"
import '../css/browse.css'
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function BrowseCard(props) {
    const slider = React.useRef(null);

    const settings = {
        arrows: false,
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
                    {props.imgs && props.imgs.length > 1 ? (
                        <>
                            <div className="arrow-left" id="card-arrow-left" style={{pointerEvents: 'all', zIndex: '999'}} onClick={() => slider?.current?.slickPrev()}><ChevronLeft color={"black"} size={18} /></div>
                            <div className="arrow-right" id="card-arrow-right" onClick={() => slider?.current?.slickNext()}><ChevronRight color={"black"} size={18} /></div>
                        </>
                    ) : undefined}
                    <Slider ref={slider} {...settings}>
                        {props.imgs && props.imgs.map(img => {
                            return (<Image id="card-img" src={img}/>)
                        })}
                    </Slider>
                </div>
                <Card.Body as={Link} to={`/details?id=${props.id}`} style={{textDecoration: 'none', color: 'black'}}>
                    <Card.Title id="card-title">{props.name}</Card.Title>
                    <Card.Text id="card-price">${props.price}</Card.Text>
                    <Card.Text id="card-time">Posted by {props.username}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}