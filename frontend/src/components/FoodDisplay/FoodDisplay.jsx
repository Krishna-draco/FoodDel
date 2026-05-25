import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({Category}) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h3 className="food-display-heading">Foods Near You</h3>
      <div className="food-list">
        {food_list.map((item,idx) => {
          if(Category === item.category || Category === 'All'){
            return <FoodItem key={idx} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
