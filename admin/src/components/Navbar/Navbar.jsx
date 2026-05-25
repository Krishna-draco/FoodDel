import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/admin_assets/assets'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={assets.logo} className='logo'/>
      <img src={assets.profile_image} className='profile' />
    </div>
  )
}
  
export default Navbar
