import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import './LoginPopup.css'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const {url,setToken} = useContext(StoreContext);

  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onLogin = async (e)=>{
    e.preventDefault();
    let newUrl = url;
    if(currState == 'Login'){
      newUrl += "/api/user/login";
    }
    else{
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl,data)

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem('token',response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message);
    }
  }

  const Onchange = (event)=>{
    const name = event.target.name;
    const val = event.target.value;
    setData(data=>({...data,[name]:val}))
    console.log(data);
  }
  return (
    <div className="loginpopup-container">
      <form onSubmit={onLogin}>
        <div className="popup-title">
          <h3>{currState === "Login" ? "Login" : "Sign up"}</h3>
          <img
            src={assets.cross_icon}
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        <div className="inputs">
          {currState == "Login" ? (
            <></>
          ) : (
            <input
              onChange={Onchange}
              value={data.name}
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          )}
          <input
            onChange={Onchange}
            value={data.email}
            type="text"
            name="email"
            placeholder="Your email"
            required
          />
          <input
            onChange={Onchange}
            value={data.password}
            type="text"
            name="password"
            placeholder="Your password"
            required
          />
          <button className="create-btn" type="submit">
            {currState == "Login" ? "Login" : "Create Account"}
          </button>
        </div>
        <div className="agree-section">
          <input type="checkbox" required />
          <span>
            By continuing i agree to the terms of use & privacy policy.
          </span>
        </div>
        <div className="add-login-section">
          <span>
            {currState == "Login"
              ? "Create a new account? "
              : "Already have an account? "}
          </span>
          <span
            className="login-signup-toggle"
            onClick={() => {
              setCurrState((prev) => {
                return prev == "Login" ? "Signup" : "Login";
              });
            }}
          >
            {currState == "Login" ? "Click here" : "Login here"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
