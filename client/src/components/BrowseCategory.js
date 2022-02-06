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
import { useAuth } from "../contexts/AuthContext"

export default function BrowseCategory(props) {
    const slider = useRef(null);
    const containerRef = useRef(null);
    const [sliderStyle, setSliderStyle] = useState("slider");
    const [seeAll, setSeeAll] = useState("See All")
    const [showArrow, setShowArrow] = useState("")
    // eslint-disable-next-line no-unused-vars
    const { getZipCode } = useAuth();
    const [categoryItems, setCategoryItems] = useState();
    const [loading, setLoading] = useState(true);

    const getBrowseData = async(zip) =>{
        /*  endpoints:
            http://localhost:5000/getBrowseData/30024
            https://us-central1-idyll-29e66.cloudfunctions.net/server/getBrowseData/30024
        */
        const res = await axios.get(`https://us-central1-idyll-29e66.cloudfunctions.net/server/getBrowseData/${zip}`);
        return JSON.parse(JSON.stringify(res.data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async() => {
        let zip = await getZipCode();
        let categoryItems = await getBrowseData(zip);
        console.log(categoryItems);
        setCategoryItems(categoryItems.items)
        setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const changeSliderStyle = () => {
        if (sliderStyle === "slider") {
            setSliderStyle("slider-all");
            setSeeAll("Collapse")
            setShowArrow("off")
        } else {
            setSliderStyle("slider");
            setSeeAll("See All");
            setShowArrow("")
        }
      };

    const scroll = (scrollOffset) => {
        slider.current.scrollLeft += scrollOffset;
      };
      
    return (
        <div class="category-container" ref={containerRef}>
            <div id="category-header">
                <h1 id="category-title">{props.name || <Skeleton/>}</h1>
                <div className="arrows">
                    <div id="see-all" onClick={changeSliderStyle}>{seeAll}</div>
                    <div className="arrow-left" id={showArrow} onClick={() => scroll(-350)}><ChevronLeft color={"black"} size={18} /></div>
                    <div className="arrow-right" id={showArrow} onClick={() => scroll(350)}><ChevronRight color={"black"} size={18} /></div>
                </div>
            </div>
            {loading ? (
                <Skeleton count={6}/>
            ) : (
                null
            )}
            <div id={sliderStyle} ref={slider}>
                {categoryItems ? (
                    categoryItems.map(item =>{
                        return <BrowseCard name={item.dishName} price={item.dishPrice} imgs={item.pictureURLs} id={item.id} username={item.username}/>;
                    })
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    )
}