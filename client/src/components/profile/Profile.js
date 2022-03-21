import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/profile.css'
import { Container, Row, Dropdown} from "react-bootstrap"
import sellerIMG from "../../images/henrylfg.PNG"
import Rating from '@mui/material/Rating';
import {BookmarkCheckFill, HouseFill, LockFill, PencilFill, GearWideConnected} from "react-bootstrap-icons"
import EditAccountInfo from "./EditAccountInfo"
import AccountOverview from "./AccountOverview"
import MobileMenu from './MobileMenu';
import { useAuth } from "../../contexts/AuthContext"
import { Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


function Profile (props) {

    const {userData} = useAuth();
    const navigate = useNavigate();
    const [componentURLValue, setComponentURLValue] = useState();

    useEffect(()=>{
        setComponentURLValue(window.location.pathname);
    },[window.location.pathname])

    return ( 
        <Container style={{padding:0, background:'#83E999'}} fluid>
            <Container className="px-0" style={{maxWidth: '83rem', minWidth:'24rem', background:'#ffffff', display:'flex'}} fluid>
                <div className="user-profile-navbar">
                    <div className="user-profile-name-wrapper">
                        <h1 className="user-profile-name"> {userData.firstName + " " + userData.lastName} </h1>
                    </div>
                    <div className="user-profile-img-wrapper">
                        <img className="user-profile-img" src={sellerIMG}></img>
                    </div>
                    <div className="side-selection-bar">
                        <div className="side-selection-bar-element">
                            <div className="side-selection-bar-element-label" id="chef-settings">
                                <div className="side-selection-bar-element-label-icon">
                                    <BookmarkCheckFill size={24} color="#CEAC32"/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Chef Profile 
                                </div>
                            </div>
                        </div>
                        <div className="side-selection-bar-element" onClick={()=> navigate("/profile/accountOverview")}>
                            <div className="side-selection-bar-element-label" id="sidebar-element">
                            <div className="side-selection-bar-element-label-icon">
                                    <HouseFill size={24}/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Account Overview
                                </div>
                            </div>
                        </div>
                        <div className="side-selection-bar-element" onClick={() => navigate("/profile/editAccountInfo")}>
                            {/* <div className="side-selection-bar-element-selected"/> */}
                            <div className="side-selection-bar-element-label" id="sidebar-element">
                            <div className="side-selection-bar-element-label-icon">
                                    <LockFill size={24}/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Edit Account Info
                                </div>
                            </div>
                        </div>
                        <div className="side-selection-bar-element">
                            <div className="side-selection-bar-element-label" id="sidebar-element">
                            <div className="side-selection-bar-element-label-icon">
                                    <PencilFill size={24}/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Change Password
                                </div>
                            </div>
                        </div>
                        <div className="side-selection-bar-element">
                            <div className="side-selection-bar-element-label" id="sidebar-element">
                            <div className="side-selection-bar-element-label-icon">
                                    <GearWideConnected size={24}/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Settings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container style={{
                    maxWidth: '65.5rem', 
                    paddingLeft:'60px',
                    paddingRight:'60px',  
                    background:'#ffffff', 
                    float:'right', 
                    position:'relative'}} 
                    fluid>
                    
                    <MobileMenu componentURLValue={componentURLValue}/>    
                    
                    {props.profileComponent}
                </Container>
            </Container>
        </Container>
     );
}

export default Profile;