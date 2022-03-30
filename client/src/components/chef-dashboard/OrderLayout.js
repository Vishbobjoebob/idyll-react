import React, { useEffect, useState } from 'react';
import '../../css/chef-dashboard/order-layout.css';
import orderIMG from "../../images/swordfish.jpeg";
import Rating from '@mui/material/Rating';

function OrderLayout(props) {
    return (
        <div className="order">
            <div className="order-header">
                <div className="order-header-item-number"> Order #6900</div>
                <div className="order-header-customer">for <strong>Jensen Zhang</strong></div>
            </div>
            <div className="order-body">
                <img className="order-img" src={orderIMG}/>
                <div className="order-details">
                    <div className="order-name"> Spike Spiegel </div>
                    <div className="order-additional-details">
                        <div className="order-price">$69.00</div>
                        
                    </div>
                </div>
            </div>
            <div className="order-footer">
                <div className="order-total"> Total: $69.00 </div>
                <div className="order-buttons">
                    <button className="order-accept-btn"> Accept </button>
                    <button className="order-decline-btn"> Decline </button>
                </div>
            </div>
        </div>
    )
}

export default OrderLayout;