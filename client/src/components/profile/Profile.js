import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/profile.css'
import { Container, Row, Dropdown} from "react-bootstrap"
import sellerIMG from "../../images/henrylfg.PNG"
import Rating from '@mui/material/Rating';
import {BookmarkCheckFill, HouseFill, LockFill, PencilFill, GearWideConnected} from "react-bootstrap-icons"
import EditAccountInfo from "./EditAccountInfo"
import MobileMenu from './MobileMenu';


function Profile () {
    return ( 
        // <div style={{width:'100vw', height:'100vh', padding:0, background:'#ADF3B4'}}>
            <Container className="px-0 mb-4" style={{maxWidth: '83rem', minWidth:'24rem', background:'#ffffff', display:'flex'}} fluid>
                <div className="user-profile-navbar">
                    <div className="user-profile-name-wrapper">
                        <h1 className="user-profile-name"> Henry Tang </h1>
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
                        <div className="side-selection-bar-element">
                            <div className="side-selection-bar-element-label" id="sidebar-element">
                            <div className="side-selection-bar-element-label-icon">
                                    <HouseFill size={24}/> 
                                </div>
                                <div className="side-selection-bar-element-label-txt">
                                    Account Overview
                                </div>
                            </div>
                        </div>
                        <div className="side-selection-bar-element">
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
                    height:'calc(100vh-80px)', 
                    paddingLeft:'60px',
                    paddingRight:'60px',  
                    background:'#ffffff', 
                    float:'right', 
                    position:'relative', 
                    borderRight: '1px solid #DEDEDB'}} 
                    fluid>
                    
                    <MobileMenu/>
                    <EditAccountInfo/>
                    
                </Container>
            </Container>
        // </div>
     );
}

export default Profile;