import React from 'react'
import './AppDownload.css'
import {assets} from '../../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='AppDownload-container' id='Mobile-app'>
      <h2>For Better Experience Download</h2>
      <h2>FoodDel App</h2>
      <div className="download-img">
         <img src={assets.app_store} alt="" />
         <img src={assets.play_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
