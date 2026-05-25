import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const {totalCartCost} = useContext(StoreContext)
  return (
    <div className="place-order">
      <div className="place-order-left">
        <h2>Delivery Information</h2>
        <div className="multi-line-inputs">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Street" />
        <div className="multi-line-inputs">
          <input type="text" placeholder="Email adress" />
          <input type="text" placeholder="City" />
        </div>
        <div className="multi-line-inputs">
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip code" />
        </div>
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="right-place-order">
          <h3>Cart Totals</h3>
          <hr />
          <div className="subtotal right-place-order-items">
            <p>Subtotal</p>
            <p>₹{totalCartCost()}</p>
          </div>
          <hr />
          <div className="Delivery-fee right-place-order-items">
            <p>Delivery fee</p>
            {totalCartCost() > 0 ? <p>₹2</p> : <p>₹0</p>}
          </div>
          <hr />
          <div className="total right-place-order-items">
            <p>Total</p>
            <p>₹{totalCartCost() > 0 ? totalCartCost() + 2 : 0}</p>
          </div>
          <button className="payment-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
