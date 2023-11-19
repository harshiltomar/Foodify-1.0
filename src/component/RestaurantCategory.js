import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  console.log(data)
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className={`RestaurantCategory ${isAccordionOpen ? "active" : ""}`}>
      {/* Header */} 
      <header onClick={handleClick}>
        <span className="title">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="arrow">⬇️</span>
      </header>

      {/* Accordion Body */}
      {isAccordionOpen && <ItemList className="item-List" items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
