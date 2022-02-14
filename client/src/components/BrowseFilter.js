import React from "react"
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
    const {browseRoute, type, price, rating, cuisine, setType, setPrice, setRating} = useSearch();

    let navigate = useNavigate();
    
    const handleChangeType = (e) => {
        setType(e.target.value);
        browseRoute(cuisine, e.target.value, price, rating);
    }

    const handleChangePrice = (e) => {
        setPrice(e.target.value)
        browseRoute(cuisine, type, e.target.value, rating);
    }

    const handleChangeRating = (event, newRating) => {
        setRating(newRating)
        browseRoute(cuisine, type, price, newRating);
    }

    return (
        <>  
            <div id="dropdown-wrapper">
                <div style={{display:"inline"}}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Type of Meal</InputLabel>
                        <Select className="dropdown-gray" defaultValue= {props.type} onChange={handleChangeType} label="Type of Meal" sx={{width:150,height:50, marginRight:"10px"}}>
                            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                            <MenuItem value={"Lunch"}>Lunch</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select className="dropdown-gray" defaultValue= {props.price} onChange={handleChangePrice} label="Price" sx={{width:150,height:50, marginRight:"10px"}}>
                            <MenuItem value={"5"}>$5</MenuItem>
                            <MenuItem value={"10"}>$10</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                        <Select className="dropdown-gray" defaultValue= {"Rating"} label="Rating" sx={{width:200,height:50, marginRight:"10px"}}>
                            <MenuItem value={"Rating"}><Rating name="simple-controlled" value={rating} onChange={handleChangeRating}/></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <input onClick={() => {navigate("/"); setType(''); setPrice(''); setRating('');}} id="reset-btn" className="btn btn-primary mb-3" type="submit" value="Reset"/>
            </div>
        </>
    ) 
}
