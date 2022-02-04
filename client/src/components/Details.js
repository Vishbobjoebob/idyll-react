import React, { useEffect } from 'react';
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from "../contexts/AuthContext"

function Details () {
    const [searchParams] = useSearchParams();

    const {getZipCode, token} = useAuth();

    useEffect(() => {

        async function fetchData() {
            const zipCode = await getZipCode();

            const res = await axios.get(`http://localhost:5000/getPost/${zipCode}/${searchParams.get('id')}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log(res.data);
        }

        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className="test">
            {searchParams.get('item')}
        </div>
     );
}

export default Details;