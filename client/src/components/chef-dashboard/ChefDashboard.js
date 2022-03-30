import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/chef-dashboard/chef-dashboard.css'
import { Container, Row, Dropdown} from "react-bootstrap"
import {CashStack, Newspaper, HouseDoorFill, PersonFill, GearFill} from "react-bootstrap-icons"
import Orders from './Orders'
import MobileChefMenu from './MobileChefMenu'

function ChefDashboard (props) {
    return ( 
        <Container style={{padding:0, background:'#F1F1F1', minHeight:'calc(100vh - 81px)', display:'flex'}} fluid>
            <div className="side-navbar-wrapper">
                <div className="side-icon-wrapper">
                    <div className="side-icon">
                        <Newspaper size={32} color={"white"}/>
                    </div>
                    <div className="side-icon">
                        <HouseDoorFill size={32} color={"white"}/>
                    </div>
                    <div className="side-icon">
                        <CashStack size={32} color={"white"}/>
                    </div>
                    <div className="side-icon">
                        <PersonFill size={32} color={"white"}/>
                    </div>
                    <div className="side-icon">
                        <GearFill size={32} color={"white"}/>
                    </div>
                </div>
                <div className="side-text-wrapper">
                    <div className="side-text">
                        Orders  
                    </div>
                    <div className="side-text">
                        Summary 
                    </div>
                    <div className="side-text">
                        Sell
                    </div>
                    <div className="side-text">
                        Profile
                    </div>
                    <div className="side-text">
                        Settings
                    </div>
                </div>
            </div>
            <Container style={{padding:0, height:'100%'}} fluid>
                <MobileChefMenu/>
                <Orders/>
            </Container>
        </Container>
     );
}

export default ChefDashboard;