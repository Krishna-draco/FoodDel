import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/admin_assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [active,setActive] = useState('None');
  const classFunc = (element)=>{
    if(element != active){
      return `${element} left-nav-item`;
    }
    else{
      return `${element} left-nav-item active`;
    }
  }

  return (
    <div className="left-nav">
      <Link
        to="/Add"
        onClick={() =>
          setActive("add-items")
        }
      >
        <div className={classFunc("add-items")}>
          <img src={assets.add_icon} alt="" />
          <p>Add items</p>
        </div>
      </Link>

      <Link
        to="/Orders"
        onClick={() =>
          setActive("orders")
        }
      >
        <div className={classFunc("orders")}>
          <img src={assets.order_icon} alt="" />
          <p>Orders</p>
        </div>
      </Link>

      <Link
        to="/List"
        onClick={() =>
          setActive("list-items")
        }
      >
        <div className={classFunc("list-items")}>
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar
