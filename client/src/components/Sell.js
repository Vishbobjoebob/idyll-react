import axios from 'axios'
import React, { useEffect, useState, useRef} from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PinMapFill } from 'react-bootstrap-icons'
import TimePicker from 'react-time-picker'
import { useAuth } from "../contexts/AuthContext"
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage';  
import 'firebase/compat/auth'
import '../css/styles.css'
import '../css/sell.css'
import { useNavigate } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'react-bootstrap/Image'

export default function Sell(props) {
    const navigate = useNavigate();
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes();
    const [cooked, setCooked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([])
    const [value, onChange] = useState(currentTime);
    const {zipCode, getZipCode, token, userData} = useAuth();

    let dishNameRef = useRef();
    let dishDescriptionRef = useRef();
    let dishRestrictionsRef = useRef();
    let dishPriceRef = useRef();
    let typeRef = useRef();
    let cuisineRef = useRef();
    let waitTimeRef = useRef();
    let servingsRef = useRef();
    let dropOffRef = useRef();
    let additionalCommentsRef = useRef();
 
    useEffect(() => {
        getZipCode();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddImage = (e) => {
        setImages((images) => [...images, e.target.files]);
    }

    function handleCooked(e) {
        if (e.target.checked) {
            setCooked(true)
        }
        else {
            setCooked(false)
        }
    }

    async function submitSellInfo(e) {
        e.preventDefault();

        let dishObject = {
            dishName: dishNameRef.value,
            dishDescription: dishDescriptionRef.value,
            dishRestrictions: dishRestrictionsRef.value,
            dishPrice: dishPriceRef.value,
            type: typeRef.value,
            cuisine: cuisineRef.value,
            waitTime: waitTimeRef.value,
            servings: servingsRef.value,
            dropOff: dropOffRef.checked,
            additionalComments: additionalCommentsRef.value,
            cooked: cooked,
            zipCode: zipCode,
            userData: userData,
        }


        if (localStorage.getItem('auth') !== 'true') {
            toast.error('You must be logged in to post a dish.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        setLoading(true);
        getZipCode();   // get zip code

        let imageURLarray = [];
        console.log(images);

        for (let i = 0; i < images.length; i++) {
            const ref = firebase.storage().ref().child(images[i][0].name);
            const metadata = {
                contentType: images[i].type
            }
            let snapshot = await ref.put(images[i][0], metadata);
            
            let pictureURL = await snapshot.ref.getDownloadURL();
            imageURLarray.push(pictureURL);
        }

        dishObject.pictureURLs = imageURLarray;

        let res = await axios({
            method: 'post',
            url:'https://us-central1-idyll-29e66.cloudfunctions.net/server/api/uploadPost',
            // url:'http://localhost:5000/api/uploadPost',
            data: dishObject, 
            headers: {
                Authorization: 'Bearer ' + token,
            }
        }).catch(err => {
            setLoading(false);
            console.log("my boi")
            toast.error('There was an error posting your dish. Please try again.', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        })

        if (res.data.success) {
            navigate('/')
            toast.success('Your dish has been posted!', {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('There was an error posting your dish. Please try again.', {
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
            <Container fluid>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <div class="form-wrapper">
                            <Form onSubmit={submitSellInfo}>
                                <h1 id="sell-form-header">Tell us a little about your dishes</h1>
                                <h1 id="location-text"><PinMapFill color="black" size={22}/>Your zip code: {zipCode}</h1>
                                
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Name of Dish</Form.Label>
                                    <Form.Control 
                                        ref={ref => dishNameRef = ref}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control className="gray" as="textarea" rows={5} 
                                        ref = {ref => dishDescriptionRef = ref}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Dietary Restrictions</Form.Label>
                                    <Form.Control className="gray" 
                                        ref = {ref => dishRestrictionsRef = ref}
                                        required
                                    />
                                </Form.Group>
                                <div class="multiple-groups" >
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Price (USD)</Form.Label>
                                        <Form.Control
                                        className="gray" 
                                            ref={ref => dishPriceRef = ref}
                                        type="number"
                                        required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select 
                                            ref={ref => typeRef = ref}
                                            required
                                            className="gray">
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                            <option value="Dessert">Dessert</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div class="multiple-groups">
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Wait Time (minutes)</Form.Label>
                                        <Form.Control  
                                            ref={ref => waitTimeRef = ref}
                                            type="number"
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label >Servings</Form.Label>
                                        <Form.Control className="gray" 
                                        type="number"
                                            ref={ref => servingsRef = ref}
                                            required
                                        />
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Cuisine</Form.Label>
                                    <Form.Select 
                                    ref={ref => cuisineRef = ref}
                                    className="gray"
                                    required >
                                        <option value="American">American Food</option>
                                        <option value="Chinese">Chinese Food</option>
                                        <option value="French">French Food</option>
                                        <option value="Indian">Indian Food</option>
                                        <option value="Italian">Italian Food</option>
                                        <option value="Japanese">Japanese Food</option>
                                        <option value="Korean">Korean Food</option>
                                        <option value="Mexican">Mexican Food</option>
                                        <option value="Thai">Thai Food</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Pictures</Form.Label>
                                    <Form.Control 
                                    required
                                    onChange={handleAddImage}
                                    className="file-input" type="file" multiple />
                                </Form.Group>
                                {images.length !== 0 ? 
                                images.map((images, index) => {
                                    return <Image className="images" src={URL.createObjectURL(images[0])} alt="" fluid/>
                                })
                                : null}
                                <Form.Group className="mb-3" id="">
                                    <Form.Check onChange={handleCooked} type="checkbox" label="Is the food already cooked?" />
                                </Form.Group>
                                {cooked ? (
                                     <div class="multiple-groups">
                                        <Form.Group className="mb-3 half">
                                            <Form.Label>Start Time</Form.Label> <br/>
                                            <TimePicker  onChange={onChange} value={value}/>
                                        </Form.Group>
                                        <Form.Group className="mb-3 half">
                                            <Form.Label >End Time</Form.Label> <br/>
                                            <TimePicker onChange={onChange} value={value}/>
                                        </Form.Group>
                                    </div>
                                ): null}
                                <Form.Group className="mb-3" id="">
                                    <Form.Check
                                        ref={ref => dropOffRef = ref}
                                    type="checkbox" label="Are you willing to drop off the food?" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Additional Comments</Form.Label>
                                    <Form.Control 
                                    ref={ref => additionalCommentsRef = ref}
                                    className="gray" as="textarea" rows={5} />
                                </Form.Group>
                                <div className="sell-btns">
                                    <Button type="submit" id="add-btn">
                                        Add another dish
                                    </Button>
                                    {loading ? 
                                        <Loader className="loader" type="ThreeDots" color="#568850" height={80} width={80} /> :
                                        <Button type="submit" id="sell-submit-btn">
                                            Submit
                                        </Button>
                                    }
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            )   
}