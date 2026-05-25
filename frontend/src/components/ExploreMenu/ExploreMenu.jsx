import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "./../../assets/frontend_assets/assets";

const ExploreMenu = ({ Category, setCategory }) => {
  return (
    <>
      <div className="explore-container" id="Explore-menu">
        <div className="heading">
          <h6>Explore our menu</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur deserunt molestias officia quas voluptate, ipsum vitae
            at velit odit minima provident, ut, iste sed earum!
          </p>
        </div>
        <div className="menu-container">
          {menu_list.map((element, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  setCategory((prev) =>
                    prev === element.menu_name ? "All" : element.menu_name
                  );
                }}
                className={
                  Category == element.menu_name
                    ? "active menu_List"
                    : "menu_List"
                }
              >
                <img src={element.menu_image} alt={element.menu_name} />
                <p>{element.menu_name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="horizontal-line" />
    </>
  );
};

export default ExploreMenu;
