import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/mobileMenu.css'
import { Container, Row, FormCheckProps, Form, Button} from "react-bootstrap"
import {BookmarkCheckFill, HouseFill, LockFill, PencilFill, GearWideConnected, ArrowLeftCircle} from "react-bootstrap-icons"
import Select, {components} from "react-select"
import { maxWidth } from '@mui/system';
import {useNavigate} from 'react-router-dom'


function MobileMenu (props) {

    const navigate = useNavigate();

    const options = [
        { value: "chefProfile", label: "Chef Profile", icon: <BookmarkCheckFill size={24} color="#CEAC32"/>, color:"#CEAC32" },
        { value: "accountOverview", label: "Account Overview", icon: <HouseFill size={24} color="#000000"/>, color:"#000000" },
        { value: "editAccountInfo", label: "Edit Account Info", icon: <PencilFill size={24} color="#000000"/>, color:"#000000" },
        { value: "changePassword", label: "Change Password", icon: <LockFill size={24} color="#000000"/>, color:"#000000" },
        { value: "settings", label: "Settings", icon: <GearWideConnected size={24} color="#000000"/>, color:"#000000" },
        { value: "Sign Out", label: "Sign Out", icon: <ArrowLeftCircle size={24} color="#FF0000"/>, color:"#FF0000" },
      ];
    
    const { Option } = components;
    const IconOption = props => (
    <Option {...props}>
        <div style={{display:"flex"}} onClick={()=>navigate("/profile/" + props.data.value)}>
            {props.data.icon}
            <div style={{color:props.data.color, marginLeft:"10px", fontWeight:400}}>{props.data.label}</div>
        </div>
    </Option>
    );

    return ( 
        <div className="user-profile-mobile-menu-wrapper">
            <div className="user-profile-mobile-menu-select-wrapper">
                <Select defaultValue={options[options.findIndex(obj => obj.value==props.componentURLValue)]} components={{ Option: IconOption }} isSearchable={false} isClearable={false} options={options}/>
            </div>
        </div>
     );
}

export default MobileMenu;