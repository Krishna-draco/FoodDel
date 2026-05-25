import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cart, removeFromCart, totalCartCost } =
    useContext(StoreContext);
  
  const navigate = useNavigate();

  return (
    <>
      <div className="Cart-container">
        <div className="cart-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list.map((item, idx) => {
          if (cart[item._id] > 0) {
            return (
              <>
                <div key={idx} className="cart-item">
                  <p>
                    <img
                      src={`http://localhost:4000/images/${item.image}`}
                      alt=""
                      className="cart-item-img"
                    />
                  </p>
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cart[item._id]}</p>
                  <p>₹{cart[item._id] * item.price}</p>
                  <p>
                    <img
                      src={assets.cross_icon}
                      onClick={() => {
                        removeFromCart(item._id);
                      }}
                      className="cross-btn"
                    />
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="lowercart-section">
        <div className="left-cart">
          <h3>Cart Totals</h3>
          <hr />
          <div className="subtotal left-cart-items">
            <p>Subtotal</p>
            <p>₹{totalCartCost()}</p>
          </div>
          <hr />
          <div className="Delivery-fee left-cart-items">
            <p>Delivery fee</p>
            {totalCartCost() > 0 ? <p>₹20</p> : <p>₹0</p>}
          </div>
          <hr />
          <div className="total left-cart-items">
            <p>Total</p>
            <p>₹{totalCartCost() > 0 ? totalCartCost() + 20 : 0}</p>
          </div>
          <button
            className="checkout-btn"
            onClick={() => {
              navigate("/Order");
            }}
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="right-cart ">
          <p>If you have a promo card enter it here:</p>
          <div className="promo">
            <input
              type="text"
              placeholder="Promo code here"
              className="promo-input"
            />
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
