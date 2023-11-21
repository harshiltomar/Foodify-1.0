import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {

  const handleClick = () => {
    setShowIndex((prevIndex) => (prevIndex === null ? null : prevIndex === data.index ? null : data.index));
  };

  return (
    <div className={`RestaurantCategory ${showItems ? "active" : ""}`}>
      {/* Header */}
      <header onClick={handleClick}>
        <span className="title">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="arrow">⬇️</span>
      </header>

      {/* Accordion Body */}
      {showItems && <ItemList className="item-List" items={data.itemCards} dummy={dummy}/>}
    </div>
  );
};

export default RestaurantCategory;
 