import axios from 'axios'
import React, { useEffect, useState, useRef} from "react"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { PinMapFill } from 'react-bootstrap-icons'
import TimePicker from 'react-time-picker'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import '../css/styles.css'
import '../css/sell.css'

export default function Sell(props) {
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes();
    const [cooked, setCooked] = useState(0);
    const [value, onChange] = useState(currentTime);

    function handleCooked(e) {
        if (e.target.checked) {
            setCooked(true)
        }
        else {
            setCooked(false)
        }
    }

    function submitSellInfo(e) {
        e.preventDefault();

    }
    return (

        <>
            {/* <div class="container-fluid scroll">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-5 offset-lg6">
                        <div class="form-wrapper">
                            <div class="form">
                                <form id="item-information" class="form-horizontal" onsubmit="submitInformation(); return false;">
                                    <h1></h1>
                                    <label class="control-label" for="dish-name" class="label-name"> Name of Dish </label>
                                    <input class="form-control" type="text" id="dish-name" name="dish-name" autocomplete="off" required/><br></br>

                                    <label for="dish-price"> Price </label>
                                    <input class="form-control" type="number" id="dish-price" name="dish-price" step="any" onkeydown="return formatPrice(event)" pattern="/^\d+.\d{2,2}$/" required/><br></br>

                                    <label for="category-selection"> Category </label>
                                    <select class="form-control" id="category-selection" name="category-selection" onchange="showOtherInput(); return false;" required>
                                <option disabled selected>Select your food's category...</option>
                                <option value="American">American</option>
                                <option value="Chinese">Chinese</option>
                                <option value="French">French</option>
                                <option value="Indian">Indian</option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Korean">Korean</option>
                                <option value="Mexican">Mexican</option>
                                <option value="Thai">Thai</option>
                                <option value="Other">Other...</option>
                            </select>
                                    <br></br>

                                    <div class="other-input" id="other-input" required>
                                        <label for="other-category"> Please enter dish's category </label>
                                        <input class="form-control" type="text" id="other-category" name="other-category"/><br></br>
                                    </div>

                                    <label for="dish-description"> Description </label>
                                    <textarea class="form-control" type="text" id="dish-description" name="dish-description" required></textarea>

                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="deliverable" name="deliverable"/>
                                        <label class="form-check-label" for="deliverable"> Guest pickup? </label><br></br>
                                    </div><br></br>

                                    <label id="dish-photo-label" for="dish-photo"> Dish Photo </label><br></br>
                                    <input class="form-control" type="file" id="dish-photo" name="dish-photo" method="post" enctype="multipart/form-data" accept="image/*" onchange="" multiple required/><br></br>

                                    <input id="submit-btn" class="btn btn-primary mb-3" type="submit" value="Submit"/>
                                    <input id="reset-btn" class="btn btn-primary mb-3" type="reset" value="Reset"/>
                                </form>
                                <div class="loader" id="loader"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Container fluid>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                        <div class="form-wrapper">
                            <Form onSubmit={submitSellInfo}>
                                <h1 id="sell-form-header">Tell us a little about your dishes</h1>
                                <h1 id="location-text"><PinMapFill color="black" size={22}/>Your zip code: 30097</h1>
                                
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control className="gray" as="textarea" rows={5} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Dietary Restrictions</Form.Label>
                                    <Form.Control className="gray" />
                                </Form.Group>
                                <div class="multiple-groups" >
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control className="gray" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select className="gray">
                                            <option value="DICTUM">Dictamen</option>
                                            <option value="CONSTANCY">Constancia</option>
                                            <option value="COMPLEMENT">Complemento</option>
                                    </Form.Select>
                                    </Form.Group>
                                </div>
                                <div class="multiple-groups">
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label>Wait Time (minutes)</Form.Label>
                                        <Form.Control  />
                                    </Form.Group>
                                    <Form.Group className="mb-3 half" controlId="gray">
                                        <Form.Label >Servings</Form.Label>
                                        <Form.Control className="gray" />
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Cuisine</Form.Label>
                                    <Form.Select className="gray" >
                                        <option value="DICTUM">Dictamen</option>
                                        <option value="CONSTANCY">Constancia</option>
                                        <option value="COMPLEMENT">Complemento</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Pictures</Form.Label>
                                    <Form.Control className="file-input" type="file" multiple />
                                </Form.Group>
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
                                            <TimePicker  onChange={onChange} value={value}/>
                                        </Form.Group>
                                    </div>
                                ): null}
                                <Form.Group className="mb-3" id="">
                                    <Form.Check type="checkbox" label="Are you willing to drop off the food?" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="gray">
                                    <Form.Label>Additional Comments</Form.Label>
                                    <Form.Control className="gray" as="textarea" rows={5} />
                                </Form.Group>
                                <div className="sell-btns">
                                    <Button type="submit" id="add-btn">
                                        Add another dish
                                    </Button>
                                    <Button type="submit" id="sell-submit-btn">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>

        </>
    )
}