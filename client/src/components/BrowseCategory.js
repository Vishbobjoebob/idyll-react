import React, {useRef, useState, useEffect} from "react"
import '../css/index.css'
import '../css/browse.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import BrowseCard from "./BrowseCard"
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BrowseCategory(props) {
    // const [width, setWidth] = useState(0);
    // const [cardsNum, setCardsNum] = useState(3);
    const slider = useRef(null);
    const containerRef = useRef(null);
    const [sliderStyle, setSliderStyle] = useState("slider");
    const [seeAll, setSeeAll] = useState("See All")
    const [showArrow, setShowArrow] = useState("")

    const [categoryItems, setCategoryItems] = useState();


    const getBrowseData = async() =>{
        //http://localhost:5000/getBrowseData/30024
        //https://us-central1-idyll-29e66.cloudfunctions.net/server/getBrowseData/30024
        const res = await axios.get(`https://us-central1-idyll-29e66.cloudfunctions.net/server/getBrowseData/30024`)
        console.log(JSON.parse(JSON.stringify(res.data)));
        return JSON.parse(JSON.stringify(res.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
        let categoryItems = await getBrowseData();
        console.log(categoryItems);
        setCategoryItems(categoryItems.items)
    },[])

    const changeSliderStyle = () => {
        if (sliderStyle === "slider") {
            setSliderStyle("slider-all");
            setSeeAll("Collapse")
            setShowArrow("off")
        }
        else {
            setSliderStyle("slider");
            setSeeAll("See All");
            setShowArrow("")
        }
      };
    
    // const getListSize = () => {
    //     const newWidth = containerRef.current.clientWidth;
    //     setWidth(newWidth);
    //     const newCardsNum = (width + 100)/(400);
    //     setCardsNum(newCardsNum);
    //   };
    // useEffect(() => {
    //     window.addEventListener("resize", getListSize);
    //     if (cardsNum) {console.log(cardsNum)};
    //     if (width) {console.log(width)};
    //   }, [width]);
    // const settings = {
    //     arrows:true,
    //     infinite:false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     // nextArrow: <ArrowRightCircleFill/>,
    //     // prevArrow: <ArrowLeftCircleFill/>,
    //     className: 'react__slick__slider__parent',
    //   };
    const scroll = (scrollOffset) => {
        slider.current.scrollLeft += scrollOffset;
        console.log(slider);
      };
    return (
        <div class="category-container" ref={containerRef}>
            <div id="category-header">
                <h1 id="category-title">{props.name || <Skeleton/>}</h1>
                <div className="arrows">
                    <div id="see-all" onClick={changeSliderStyle}>{seeAll}</div>
                    <div className="arrow-left" id={showArrow}><ChevronLeft color={"black"} size={18} onClick={() => scroll(-350)} /></div>
                    <div className="arrow-right" id={showArrow}><ChevronRight color={"black"} size={18} onClick={() => scroll(350)} /></div>
                </div>
            </div>
            <div id={sliderStyle} ref={slider}>
                {categoryItems ? (
                    categoryItems.map(item =>{
                        return <BrowseCard name={item.dishName} price={item.dishPrice} imgs={item.pictureURLs}/>;
                    })
                ) : (
                    <Skeleton/>
                )
                }
            </div>
        </div>
    )
}