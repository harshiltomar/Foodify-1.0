import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items , dummy}) => {

  const dispatch= useDispatch();

  const handleAddItem= (item)=> {
    // Dispatch an Action
    //Whatever i pass inside this will go into my cart
    dispatch(addItem(item));
  }

  console.log(dummy);
  return (
      <div>
        {items.map((item) => (
          <div key={item.card.info.id} className="unique-item">
            <div className="unique-info">
              <span>{item.card.info.name}:  Rs.{item.card.info.price/100}</span>
              <p>{item.card.info.description}</p>
              {/* <span>Rs.{item.card.info.price/100}</span> */}
            </div>
            <div className="unique-right">
              <img className="item-img" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}></img>
              <button className="add-button" 
              onClick={()=> handleAddItem(item)}>Add+</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default ItemList;
  