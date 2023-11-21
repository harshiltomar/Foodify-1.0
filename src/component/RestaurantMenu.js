import Shimmer from "../utils/shimmer";
import { CDN_URL } from "../utils/constants";
import useRestrauntMeu from "../utils/useRestrauntMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dummy= "Dummy Data";

  const resInfo = useRestrauntMeu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  if (!name || !itemCards) {
    return <div>No data available</div>;
  }

  return (
    <div className="MenuWrapper">
      <div className="Menu">
        <div className="menu">
          <div className="menu-left">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>Avg Price: {costForTwoMessage}</h3>
            <h3>Avg Rating: {avgRating}</h3>
          </div>
          <div className="restaurant-summary"></div>
          <div className="menu-right">
            <img
              src={CDN_URL + resInfo?.cards[0]?.card?.card?.info.cloudinaryImageId}
              alt={name}
            />
          </div>
        </div>

        <div className="menu-items">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.id}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
              dummy= {dummy}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
