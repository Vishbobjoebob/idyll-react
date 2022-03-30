import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/chef-dashboard/mobile-chef-menu.css'
import {CashStack, Newspaper, HouseDoorFill, PersonFill, GearFill, Person} from "react-bootstrap-icons"
import Select, {components} from "react-select"
import { maxWidth } from '@mui/system';
import {useNavigate} from 'react-router-dom'


function MobileMenu (props) {

    const navigate = useNavigate();

    const options = [
        { value: "orders", label: "Orders", icon: <Newspaper size={24} color="#000000"/>, color:"#000000" },
        { value: "summary", label: "Summary", icon: <HouseDoorFill size={24} color="#000000"/>, color:"#000000" },
        { value: "sell", label: "Sell", icon: <CashStack size={24} color="#000000"/>, color:"#000000" },
        { value: "profile", label: "Profile", icon: <PersonFill size={24} color="#000000"/>, color:"#000000" },
        { value: "settings", label: "Settings", icon: <GearFill size={24} color="#000000"/>, color:"#000000" },
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
        <div className="mobile-chef-menu-wrapper">
            <div className="mobile-chef-menu-select-wrapper">
                <Select defaultValue={options[options.findIndex(obj => obj.value==props.componentURLValue)]} components={{ Option: IconOption }} isSearchable={false} isClearable={false} options={options}/>
            </div>
        </div>
     );
}

export default MobileMenu;