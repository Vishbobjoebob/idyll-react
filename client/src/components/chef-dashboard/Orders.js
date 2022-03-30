import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/chef-dashboard/orders.css'
import sellerIMG from "../../images/henrylfg.PNG"
import { Container, Row, Dropdown} from "react-bootstrap"
import {Newspaper, HouseDoorFill, PersonFill, GearFill} from "react-bootstrap-icons"
import OrderLayout from "./OrderLayout";

function Orders (props) {
    return ( 
        <div className="orders-wrapper">
            <div className="first-col">
                <div className="stats-wrapper">
                    <div className="stats-wrapper-first-row">
                        <div className="new-orders-stat-wrapper">
                            <h1 className="stat" id="new-orders-stat">05</h1>
                            <div className="stat-text"> New Orders </div>
                        </div>
                        <div className="pending-orders-stat-wrapper">
                            <h1 className="stat" id="pending-orders-stat">24</h1>
                            <div className="stat-text"> Pending Orders </div>
                        </div>
                        <div className="completed-orders-stat-wrapper">
                            <h1 className="stat" id="completed-orders-stat">52</h1>
                            <div className="stat-text"> Completed Orders </div>
                        </div>
                    </div>
                    <div className="money-stat-wrapper">
                        <h1 className="money"> $6891.81</h1>
                        <div className="money-text">Total Earnings</div>
                    </div>
                </div>
                <div className="new-orders-wrapper">
                    <div className="new-orders-header">
                        <div className="new-orders-header-text"> New Orders</div>
                    </div>
                    <OrderLayout/>
                    <OrderLayout/>   
                    <OrderLayout/>
                </div>
            </div>
            

            <div className="second-col">
                <div className="pending-orders-wrapper">
                    <div className="pending-orders-header">
                        <div className="pending-orders-header-text"> Pending Orders</div>
                    </div>
                    <OrderLayout/>
                    <OrderLayout/>   
                    <OrderLayout/>
                    <OrderLayout/>
                    <OrderLayout/>   
                    <OrderLayout/>
                </div>
            </div>
            <div className="third-col">
                <div className="completed-orders-wrapper">
                    <div className="completed-orders-header">
                        <div className="completed-orders-header-text"> Completed Orders</div>
                    </div>

                    <OrderLayout/>
                    <OrderLayout/>   
                    <OrderLayout/>
                    <OrderLayout/>
                    <OrderLayout/>   
                    <OrderLayout/>
                    
                </div>
            </div>
        </div>

     );
}

export default Orders;