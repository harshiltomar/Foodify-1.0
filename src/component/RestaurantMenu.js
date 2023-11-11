import { useEffect, useState } from "react";
import Shimmer from "../utils/shimmer";

const RestaurantMenu= () => {

  const[resInfo, SetResInfo]= useState(null)

  useEffect(()=> {
    fetchMenu();
  },[]);

  const fetchMenu= async ()=> {
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6304203&lng=77.21772159999999&restaurantId=8614&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();

    // console.log(json?.data.cards[0].card.card.info.name);
    SetResInfo(json?.data.cards[0].card.card.info);
  }

  const {name, cuisines, costForTwoMessage}= resInfo?.data?.cards[0]?.card?.card?.info || {};

  // console.log(resInfo?.data?.cards[0]?.card?.card?.info.name);
  return resInfo===null? (
    <Shimmer/>
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h3>{resInfo.cuisines}</h3>
      <h3>{resInfo.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;