import { useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";
import { CDN_URL } from "../utils/constants";
import { SWIGGY_API_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        SWIGGY_API_MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );

      const json = await data.json();

      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;

  const itemCards = resInfo?.cards.find(x=> x.groupedCard)?.
  groupedCard?.cardGroupMap?.REGULAR?.
  cards?.map(x => x.card?.card)?.
  filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )?.
  map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

  if (!name || !itemCards) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className="menu">
        <div className="menu-left">
          <h1>{name}</h1> 
          <h3>{cuisines.join(", ")}</h3>
          <h3>Avg Price: {costForTwoMessage}</h3>
          <h3>Avg Rating: {avgRating}</h3>
        </div>
        <div className="restaurant-summary">
        </div>
        <div className="menu-right">
          <img src={CDN_URL + resInfo?.cards[0]?.card?.card?.info.cloudinaryImageId} alt={name} />
        </div>
      </div>

      <div className="menu-items">
        <h1>MENU:</h1>
        {itemCards.map((item) => (
          <div key={item?.name} className="menu-item">
            <li>{item?.name} - Rs.{item?.price/100}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
