import { CDN_URL } from "../utils/constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  avgRating,
  costForTwo,
  veg
}) => {
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img 
        className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating} star rating</h4>
        <h4>{costForTwo}</h4>
        <div className="orderBox">
            <h4>Order Now</h4>
        </div>
    </div>
  );
};

export default RestaurantCard;