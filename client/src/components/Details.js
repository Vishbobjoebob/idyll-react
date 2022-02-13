import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../contexts/AuthContext"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";
import Slider from "react-slick";
import { Image } from "react-bootstrap"
import '../css/details.css'

function Details () {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [dishData, setDishData] = useState(undefined);
    const slider = React.useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const {getZipCode, token} = useAuth();

    useEffect(() => {

        async function fetchData() {
            const zipCode = await getZipCode();
            //http://localhost:5000/getPost/${zipCode}/${searchParams.get('id')}
            //https://us-central1-idyll-29e66.cloudfunctions.net/server/getPost/${zipCode}/${searchParams.get('id')}
            const res = await axios.get(`https://us-central1-idyll-29e66.cloudfunctions.net/server/getPost/${zipCode}/${searchParams.get('id')}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setDishData(res.data);
            setLoading(false);
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className="details px-4" style={{maxWidth: '83rem', margin: '0 auto', overflowWrap: 'break-word', paddingTop: '2rem'}}>
            {loading ? (
                <>
                <Skeleton count={10} />
                </>
            ) : (
                null
            )}
            {dishData?.pictureURLs?.length > 1 ? (
                <>
                    <div className="arrow-container" id="item-arrow-container">
                        <div className="item-arrow-left" style={{pointerEvents: 'all', zIndex: '999'}} onClick={() => slider?.current?.slickPrev()}><ChevronLeft color={"black"} size={18} /></div>
                        <div className="item-arrow-right" onClick={() => slider?.current?.slickNext()}><ChevronRight color={"black"} size={18} /></div>
                    </div>
                </>
            ) : undefined}
            <div id="itemPage-imgSlider">
                <Slider ref={slider} {...settings}>
                    {dishData?.pictureURLs.map(img => {
                        return (<Image id="itemPage-img" src={img}/>)
                    })}
                </Slider>
            </div>
            {!loading && (
                 <>
                 <div className="dish-heading">
                    <h2>{dishData?.dishName}</h2>
                    <h6>Posted by {dishData?.userData.username}</h6>
                    <h6>{(new Date(dishData?.timeUploaded).toLocaleString())}</h6>
                    <h6>${dishData?.dishPrice}</h6>
                    <h6>{dishData?.waitTime} min wait time</h6>
                 </div>
                 <div className="separator">
                     <div className="line"></div>
                 </div>
                 <div className="info description">
                    <h6>Description</h6>
                    <p>{dishData?.dishDescription}</p>
                 </div>
                 <div className="info cuisine">
                     <h6>Cuisine</h6>
                    <p>{dishData?.cuisine}</p>
                 </div>
                 <div className="info mealType">
                     <h6>Meal Type</h6>
                    <p>{dishData?.dishType}</p>
                 </div>
                 <div className="info dietaryRestrictions">
                     <h6>Dietary Restrictions</h6>
                    <p>{dishData?.dishRestrictions}</p>
                 </div>
                 <div className="info servings">
                     <h6>Servings</h6>
                    <p>{dishData?.servings}</p>
                 </div>
                 <div className="info comments">
                     <h6>Additional Comments</h6>
                    <p>{dishData?.additionalComments}</p>
                 </div>
                 {/* <p>{JSON.stringify(dishData)}</p> */}
                </>
            )}
        </div>
     );
}

export default Details;