import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/accountOverview.css'
import { Container, Row, FormCheckProps, Form, Button} from "react-bootstrap"
import {PencilFill} from "react-bootstrap-icons"
import { useAuth } from "../../contexts/AuthContext"
import {useNavigate} from "react-router-dom"

function AccountOverview (props) {
    const {userData} = useAuth();
    const navigate = useNavigate();

    return ( 
        <>
            <h1 className="account-overview-header">Account Overview</h1>
            
            <h2 className="account-overview-profile-header">Profile</h2>

            <div className="account-overview-profile-info-wrapper"> 
                <div className="account-overview-profile-label">Username</div>
                <div className="account-overview-profile-info">{userData.username}</div>
            </div>
            <div className="account-overview-profile-info-wrapper"> 
                <div className="account-overview-profile-label">First Name</div>
                <div className="account-overview-profile-info">{userData.firstName}</div>
            </div>
            <div className="account-overview-profile-info-wrapper"> 
                <div className="account-overview-profile-label">Last Name</div>
                <div className="account-overview-profile-info">{userData.lastName}</div>
            </div>
            <div className="account-overview-profile-info-wrapper"> 
                <div className="account-overview-profile-label">Email</div>
                <div className="account-overview-profile-info">{userData.email}</div>
            </div>
            <div className="account-overview-profile-info-wrapper"> 
                <div className="account-overview-profile-label">Phone Number</div>
                <div className="account-overview-profile-info">{userData.phoneNumber}</div>
            </div>

            <button className="account-overview-profile-edit-btn" onClick={()=> navigate('/profile/editAccountInfo')}> <PencilFill size={20} color={"black"} style={{marginRight:'10px'}}/> Edit Account Info </button>

            <h3 className="account-overview-profile-header1">Want to become a seller? </h3>
            <button className="account-overview-seller-btn"> Become a seller now! </button>

        </>
     );
}

export default AccountOverview;