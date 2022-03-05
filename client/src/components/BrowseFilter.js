import React from "react"
import '../css/index.css'
import '../css/browse.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import {useSearch} from "../contexts/SearchContext";
import {connectMenu} from 'react-instantsearch-dom'

export default function BrowseFilter(props) {
    const {browseRoute, price, rating, cuisine, setType, setPrice, setRating, searchRef, typeRef} = useSearch();

    let navigate = useNavigate();
    
    const handleChangeType = (event) => {
        browseRoute(cuisine, event.target.value, price, rating, searchRef.current.value);
    }

    // In progress
    // const handleChangePrice = (e) => {
    //     setPrice(e.target.value)
    //     browseRoute(cuisine, type, e.target.value, rating, search);
    // }

    // const handleChangeRating = (event, newRating) => {
    //     setRating(newRating)
    //     browseRoute(cuisine, type, price, newRating, search);
    // }

    const mealSelect = ({ items, currentRefinement, refine }) => (
        // <select
        //   value={currentRefinement || ''}
        //   onChange={event => refine(event.currentTarget.value)}
        // >
        //   <option value="">See all options</option>
        //   {items.map(item => (
        //     <option
        //       key={item.label}
        //       value={item.isRefined ? currentRefinement : item.value}
        //     >
        //       {item.label}
        //     </option>
        //   ))}
        // </select>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select ref={typeRef} className="dropdown-gray" value={currentRefinement || props.type} onChange={
          event => {
            refine(event.target.value); 
            handleChangeType(event);
          }} 
          label="Type" 
          sx={{width:150,height:50, marginRight:"10px"}}>
            <MenuItem value={''}>Type</MenuItem>
            {items.map(item => (
                <MenuItem key={item.label} value={item.isRefined ? currentRefinement : item.value}>{item.label}</MenuItem>
            ))}
        </Select>
      </FormControl>
      );
      const CustomMealSelect = connectMenu(mealSelect);
    
    // In progress
    //   const priceSelect = ({ items }) => (
    //     <FormControl>
    //         <InputLabel id="demo-simple-select-label">Price</InputLabel>
    //         <Select className="dropdown-gray" defaultValue= {props.price} onChange={handleChangePrice} label="Price" sx={{width:150,height:50, marginRight:"10px"}}>
    //             {items.map(item => (
    //                 <MenuItem key={item.label} value={item.value}>{item.value}</MenuItem>
    //             ))}
    //         </Select>
    //     </FormControl>
    //   );

    //   const CustomPriceSelect = connectMenu(priceSelect);

    //   const ratingSelect = () => (
    //         <FormControl>
    //             <InputLabel id="demo-simple-select-label">Rating</InputLabel>
    //             <Select className="dropdown-gray" defaultValue= {"Rating"} label="Rating" sx={{width:200,height:50, marginRight:"10px"}}>
    //                 <MenuItem value={"Rating"}><Rating name="simple-controlled" value={rating} onChange={handleChangeRating}/></MenuItem>
    //             </Select>
    //         </FormControl>
    //   );

    //   const CustomRatingSelect = connectMenu(ratingSelect);


    return (
        <>  
            <div id="dropdown-wrapper">
                <div style={{display:"inline"}}>
                    <CustomMealSelect attribute={"dishType"} defaultRefinement={props.type}/>
                </div>
                <input onClick={() => {navigate("/search"); setType(''); setPrice(''); setRating('');}} id="reset-btn" className="btn btn-primary mb-3" type="submit" value="Reset"/>
            </div>
        </>
    ) 
}
