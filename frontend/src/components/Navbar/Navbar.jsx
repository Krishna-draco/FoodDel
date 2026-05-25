import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const {totalCartCost,token,setToken} = useContext(StoreContext)
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const logout = ()=>{
    localStorage.removeItem("token")
    setToken(()=>"");
    navigate('/')
  }
  return (
    <div className="outer-container">
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={assets.logo} className="logo" />
          </Link>
        </div>
        <div className="nav-mid">
          <ul>
            <Link
              to="/"
              className={menu == "home" ? "active-nav" : ""}
              onClick={() => setMenu("home")}
            >
              home
            </Link>
            <a
              href="#Explore-menu"
              className={menu == "menu" ? "active-nav" : ""}
              onClick={() => setMenu("menu")}
            >
              menu
            </a>
            <a
              href="#Mobile-app"
              className={menu == "mobile-app" ? "active-nav" : ""}
              onClick={() => setMenu("mobile-app")}
            >
              mobile-app
            </a>
            <a
              href="#Contact-us"
              className={menu == "contactUs" ? "active-nav" : ""}
              onClick={() => setMenu("contactUs")}
            >
              contact us
            </a>
          </ul>
        </div>
        <div className="nav-right">
          <img src={assets.search_icon} className="searchIcon-img" />
          <div className="cart-container">
            <Link to="/Cart">
              <img src={assets.basket_icon} className="basketIcon-img" />
            </Link>
            {totalCartCost() > 0 ? <div className="dot"></div> : ""}
          </div>
        </div>
      </div>
      <div className="sign-up">
        {!token ? (
          <p
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Sign-in
          </p>
        ) : (
          <div className="nav-profile">
            <img className="basketIcon-img" src={assets.profile_icon} alt="" />
            <ul className="nav-dropdown">
              <li className="nav-drop-element">
                <img className="basketIcon-img" src={assets.bag_icon} alt="" />
                <div>Orders</div>
              </li>
              <hr />
              <li onClick={logout} className="nav-drop-element">
                <img className="basketIcon-img" src={assets.logout_icon} alt="" />
                <div>logout</div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
