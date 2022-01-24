import React, { useState} from "react"
import '../css/index.css'
import '../css/browse.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import {useSearch} from "../contexts/SearchContext";

export default function BrowseFilter(props) {
    // eslint-disable-next-line no-unused-vars

    // setType(props.type);
    // setPrice(props.price);
    // setRating(props.rating);
    const {browseRoute, type, price, rating, setType, setPrice, setRating} = useSearch();

    let navigate = useNavigate();

    
    const handleChangeType = (e) => {
        setType(e.target.value);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangeRating = (event, newRating) => {
        setRating(newRating)
    }


        
    return (
        <>  
            <div id="dropdown-wrapper">
                <div style={{display:"inline"}}>
                    {/* <MenuSelect attribute="dishType"/> */}
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Type of Meal</InputLabel>
                        <Select defaultValue= {props.type} onChange={handleChangeType} label="Type of Meal" sx={{width:200,height:50, marginRight:"10px"}}>
                            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                            <MenuItem value={"Lunch"}>Lunch</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select defaultValue= {props.price} onChange={handleChangePrice} label="Price" sx={{width:200,height:50, marginRight:"10px"}}>
                            <MenuItem value={"5"}>$5</MenuItem>
                            <MenuItem value={"10"}>$10</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select defaultValue= {"Rating"} label="Rating" sx={{width:200,height:50, marginRight:"10px"}}>
                            <MenuItem value={"Rating"}><Rating name="simple-controlled" value={rating} onChange={handleChangeRating}/></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <input onClick={() => {navigate("/"); setType(''); setPrice(''); setRating('');}} id="reset-btn" className="btn btn-primary mb-3" type="submit" value="Reset"/>
                <input onClick={() => browseRoute()} id="reset-btn" className="btn btn-primary mb-3" type="submit" value="Filter"/>
            </div>
        </>
    ) 
}
