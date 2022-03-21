import React, { useEffect, useState, useRef } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/verify-seller/apply.css'
import { Container, Row, Dropdown, Form} from "react-bootstrap"
import Select, {components} from "react-select"
import {ArrowRightCircleFill, ArrowLeftCircleFill} from "react-bootstrap-icons"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';  
import 'firebase/compat/auth'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Apply (props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {token, userData} = useAuth();

    let chefDescriptionRef = useRef();
    const [cuisineSelect, setCuisineSelect] = useState();
    const [image, setImage] = useState([]);
    let itemDescriptionRef = useRef();

    const handleSelectChange = (selectedOption) => {
        setCuisineSelect({ selectedOption }['selectedOption']);
      }

    const handleAddImage = (e) => {
        setImage((image) => [...image, e.target.files]);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(chefDescriptionRef.value);
        console.log(cuisineSelect);
        console.log(image);

        let application = {
            chefDescription: chefDescriptionRef.value,
            cuisines: cuisineSelect,
            itemDescription: itemDescriptionRef.value,
            userData: userData,
        }

        setLoading(true);

        const ref = firebase.storage().ref().child(image[0][0].name);
        const metadata = {
            contentType: image[0].type
        }
        let snapshot = await ref.put(image[0][0], metadata);
        let pictureURL = await snapshot.ref.getDownloadURL();

        console.log(pictureURL);
        application.imageUpload = pictureURL;

        console.log(token);

        let res = await axios({
            method: 'post',
            // url:'http://localhost:5000/api/uploadApplication',
            url:'https://us-central1-idyll-29e66.cloudfunctions.net/server/api/uploadApplication',
            data: application, 
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }).catch(err => {
            setLoading(false);
            console.log("my boi")
            toast.error('There was an error receiving your application. Please try again.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        });

        if (res.data.success) {
            navigate('/')
            toast.success('We have received your application and will review it shortly. Please allow up to 3 business days.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('There was an error receiving your application. Please try again.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            setLoading(false);
        }



    }

    return ( 
        <Container style={{padding:0, background:'#ffffff'}} fluid>
            <Container className="px-5 py-5" id="apply-container" fluid>
                <h1 className="apply-header"> Chef Application </h1>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mt-5" controlId="apply">
                        <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Tell us a litte about yourself </Form.Label>
                        <Form.Control as="textarea" rows={3} required ref={ref => chefDescriptionRef = ref}/>
                    </Form.Group>

                    <Form.Group className="mt-4" controlId="apply">
                        <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Which cuisines will you be cooking? </Form.Label>
                        <Select
                            isMulti
                            name="colors"
                            options={[
                            { value: 'African', label: 'African' },
                            { value: 'American', label: 'American' },
                            { value: 'British', label: 'British' },
                            { value: 'Chinese', label: 'Chinese' },
                            { value: 'French', label: 'French' },
                            { value: 'German', label: 'German' },
                            { value: 'Indian', label: 'Indian' },
                            { value: 'Italian', label: 'Italian' },
                            { value: 'Japanese', label: 'Japanese' },
                            { value: 'Korean', label: 'Korean' },
                            { value: 'Mexican', label: 'Mexican' },
                            { value: 'Thai', label: 'Thai' }]}
                            className="apply-select"
                            onChange={handleSelectChange}
                        />
                    </Form.Group>

                    <Form.Group className="mt-4" controlId="apply">
                        <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Upload a picture of an item you've made </Form.Label>
                        <Form.Control type="file" required onChange={handleAddImage}/>
                    </Form.Group> 

                    <Form.Group className="mt-4" controlId="apply">
                        <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Briefly describe your item </Form.Label>
                        <Form.Control as="textarea" rows={3} required ref={ref => itemDescriptionRef = ref}/>
                    </Form.Group>


                    <div className="apply-gray-line-2"/>

                    <div style={{display: "flex", width:"100%", justifyContent:"right", alignItems:"center", marginTop:"30px"}}>
                        {loading ? 
                            <Loader className="loader" type="ThreeDots" color="#568850" height={80} width={80} /> :
                            <button className="apply-continue-btn"> Apply <ArrowRightCircleFill size={20} color={"white"}/> </button>
                        }
                    </div>
                </Form>
                
            </Container>
            <Container style={{height:'4rem', borderTop:"1px solid #DEDEDB", position:'absolute', bottom:'0px'}} fluid>
                <div className="verify-seller-link-question"> <div>Already applied?</div> <a href="/verifySeller"><div className="verify-seller-link"> Verify here!</div></a></div>
            </Container>
        </Container>
     );
}

export default Apply;