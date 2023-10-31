import { useState, useEffect } from "react";
import Shimmer from "../utils/shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

  const [MenuInfo, setMenuInfo]= useState(null);

  useEffect(()=>{
    getMenuInfo();
  }, []);

  const getMenuInfo= async ()=> {
    const MenuResponse= await fetch(
      RESTAURANT_MENU_URL
    )

    const MenuSubData= await MenuResponse.json();
    setMenuInfo(MenuSubData.data)
  }

  const {name, cuisines, costForTwoMessage,}= MenuInfo?.cards[0]?.card?.card?.info || {};

  const {itemCards}= MenuInfo?.cards.find(x=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
  map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

  return MenuInfo === null ? <Shimmer/> : (
    <div className="menu">
        <h3>{name}</h3>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burger</li>
            <li>Diet Coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;