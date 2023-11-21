import React from 'react';
import { CDN_URL } from "../utils/constants";
import UserContext from '../utils/UserContext';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (
  {
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
  costForTwo,
}) => {

  const { loggedInUser } = useContext(UserContext);

  // Display up to 3 cuisine keywords
  const displayedCuisines = cuisines.slice(0, 3).join(", ");
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      
      <h3>{name}</h3>
      <h4>
        {displayedCuisines}
        {cuisines.length > 3 && '... '}
      </h4>
      <h4>{areaName}</h4>
      <h4>{avgRating} star rating</h4>
      <h4>{costForTwo}</h4>
      <div className="orderBox">
        <h4>Order Now</h4>
      </div>
    </div>
  );
};

//Higher Order Component: Takes input of Restaurant Card=> output of Veg/Non-Veg
export const withVegLabel= (RestaurantCard)=> {
  return (props)=> {
    return (
      <div style={{ position: 'relative' }}>
        <label className='veg-label'>Veg</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;