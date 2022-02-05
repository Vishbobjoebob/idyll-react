import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../contexts/AuthContext"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Details () {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [dishData, setDishData] = useState(undefined);

    const {getZipCode, token} = useAuth();

    useEffect(() => {

        async function fetchData() {
            const zipCode = await getZipCode();

            const res = await axios.get(`http://localhost:5000/getPost/${zipCode}/${searchParams.get('id')}`, {
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
                <Skeleton count={6}/>
            ) : (
                null
            )}
            <p>{JSON.stringify(dishData)}</p>
        </div>
     );
}

export default Details;