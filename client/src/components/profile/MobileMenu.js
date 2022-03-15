import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import '../../css/profile/mobileMenu.css'
import { Container, Row, FormCheckProps, Form, Button} from "react-bootstrap"
import {BookmarkCheckFill, HouseFill, LockFill, PencilFill, GearWideConnected} from "react-bootstrap-icons"
import Select, {components} from "react-select"
import { maxWidth } from '@mui/system';


function MobileMenu () {

    const options = [
        { value: "England", label: "England", icon: <BookmarkCheckFill size={24} color="#CEAC32"/> },
        
      ];
    
    const { Option } = components;
    const IconOption = props => (
    <Option {...props}>
        {props.data.icon}
        {props.data.label}
    </Option>
    );

    return ( 
        <div className="user-profile-mobile-menu-wrapper">
            <div className="user-profile-mobile-menu-select-wrapper">
                <Select components={{ Option: IconOption }} isSearchable={false} isClearable={false} options={options}/>
            </div>
        </div>
     );
}

export default MobileMenu;