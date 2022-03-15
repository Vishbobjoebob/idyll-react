import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../contexts/AuthContext"
import 'react-loading-skeleton/dist/skeleton.css'
import '../css/sellerDetails.css'
import { Container, Row,} from "react-bootstrap"
import sellerIMG from "../images/henrylfg.PNG"
import Rating from '@mui/material/Rating';

function SellerDetails () {
    // const [searchParams] = useSearchParams();
    // const [loading, setLoading] = useState(true);
    // const [sellerData, setSellerData] = useState(undefined);

    // const {getZipCode, token} = useAuth();

    // useEffect(() => {

    //     async function fetchData() {
    //         const zipCode = await getZipCode();
    //         //http://localhost:5000/getPost/${zipCode}/${searchParams.get('id')}
    //         //https://us-central1-idyll-29e66.cloudfunctions.net/server/getPost/${zipCode}/${searchParams.get('id')}
    //         const res = await axios.get(`https://us-central1-idyll-29e66.cloudfunctions.net/server/getSeller/${zipCode}/${searchParams.get('id')}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         });

    //         setSellerData(res.data);
    //         setLoading(false);
    //     }

    //     fetchData();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    return ( 
        <Container className="px-4" style={{maxWidth: '83rem', minWidth:'24rem'}} fluid>
            <div className="info-column">
                <div className="seller-img-wrapper">
                    <img className="seller-img" src={sellerIMG}/>
                </div>
                <h1 className="seller-name"> 
                    Henry Tang 
                    <Rating id="seller-rating" name="read-only" value={0.5} size="small" readOnly/>
                </h1>
                <div className="seller-description-wrapper">
                    <p className="seller-description">
                    No one likes me. I am so annoying. I snake everyone and I have no friends. When someone wants to go to the library with me, I reject them in favor of las chicas because I am snake. 
                    </p>
                </div>
                <h1 className="seller-info-details-label"> Cuisines </h1>
                <div className="seller-info-details">
                    Indian, Chinese, Japanese
                </div>
                <button className="seller-chat-btn"> Click to Chat! </button>
            </div>
        </Container>
     );
}

export default SellerDetails;