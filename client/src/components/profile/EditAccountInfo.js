import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/editAccountInfo.css'
import { Container, Row, FormCheckProps, Form, Button} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"

function EditAccountInfo (props) {
    
    const {userData} = useAuth();
    return ( 
        <>
            <h1 className="edit-account-info-header">Edit Account Info</h1>

            {/* <div className="edit-account-info-gray-line"/> */}
            <Form>
                <Form.Group className="mt-5" controlId="edit-account-info">
                    <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Username </Form.Label>
                    <Form.Control style={{height:"50px"}} controlId="edit-account-info-input" type="name" defaultValue={userData.username}/>
                </Form.Group>

                <Form.Group className="mt-4" controlId="edit-account-info">
                    <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> First Name </Form.Label>
                    <Form.Control style={{height:"50px"}} controlId="edit-account-info-input" type="name" defaultValue={userData.firstName}/>
                </Form.Group>

                <Form.Group className="mt-4" controlId="edit-account-info">
                    <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Last Name </Form.Label>
                    <Form.Control style={{height:"50px"}} controlId="edit-account-info-input" type="name" defaultValue={userData.lastName}/>
                </Form.Group>

                <Form.Group className="mt-4" controlId="edit-account-info">
                    <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Email </Form.Label>
                    <Form.Control style={{height:"50px"}} controlId="edit-account-info-input" type="name" defaultValue={userData.email}/>
                </Form.Group>

                <Form.Group className="mt-4" controlId="edit-account-info">
                    <Form.Label style={{fontWeight:"600"}} className="font-weight-bold"> Phone Number </Form.Label>
                    <Form.Control style={{height:"50px"}} controlId="edit-account-info-input" type="name" defaultValue={userData.phoneNumber}/>
                </Form.Group>

                <div className="edit-account-info-gray-line-2"/>

                <div style={{display: "flex", width:"100%", justifyContent:"right", alignItems:"center", marginTop:"30px"}}>
                    <button className="edit-account-info-cancel-btn" type="reset"> CANCEL </button>
                    <button className="edit-account-info-submit-btn" type="submit"> Save Profile </button>
                </div>

            </Form>

        </>
     );
}

export default EditAccountInfo;