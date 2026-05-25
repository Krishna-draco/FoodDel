import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";

import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ item }) => {
  const {cart,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div key={item._id} className="food-item">
      <img src={`http://localhost:4000/images/${item.image}`} alt="" />

      <div className="counter-container">
        <div className="counter-section">
          {!cart[item._id] ? (
            <img
              onClick={() => addToCart(item._id)}
              src={assets.add_icon_white}
              className="btn-foodDisplay initial-btn"
              alt="Add to cart"
            />
          ) : (
            <div className="count-active">
              <img
                src={assets.remove_icon_red}
                onClick={() => removeFromCart(item._id)}
                className="btn-foodDisplay"
                alt="Remove from cart"
              />
              <p>{cart[item._id]}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCart(item._id)}
                className="btn-foodDisplay"
                alt="Add more"
              />
            </div>
          )}
        </div>
      </div>

      <div className="text-container">
        <div className="name-rating">
          <h3>{item.name}</h3>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <h4 className="price">₹{item.price}</h4>
      </div>
    </div>
  );
};
export default FoodItem;
