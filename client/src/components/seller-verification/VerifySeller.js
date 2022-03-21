import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/verify-seller/verify-seller.css'
import { Container, Row, Dropdown} from "react-bootstrap"
import {LockFill} from "react-bootstrap-icons"
import { toast } from 'react-toastify';

function VerifySeller (props) {

    return ( 
        <Container style={{padding:0, background:'#ffffff'}} fluid>
            <Container className="px-5 py-5" id="verify-seller-container" fluid>
                <h1 className="verify-seller-header"> Sign up to be a chef! </h1>

                <div className="verify-seller-input">
                    <div className="verify-seller-input-label"><LockFill size={26} color={"black"}/></div>
                    <input className="verify-seller-input-box" placeholder='Verification Code'></input>
                </div>

                <div className="form-red-txt">* Verify that you are a chef with your code</div>
                
                <button className="verify-seller-button">Become a chef now!</button>

            </Container>
            <Container style={{height:'4rem', borderTop:"1px solid #DEDEDB", position:'absolute', bottom:'0px'}} fluid>
                <div className="verify-seller-link-question"> <div>Need a code?</div> <a href="/apply"><div className="verify-seller-link"> Get one now!</div></a></div>
            </Container>
        </Container>
     );
}

export default VerifySeller;