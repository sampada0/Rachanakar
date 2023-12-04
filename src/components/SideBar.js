import React from 'react'
import '../styles/sidebar.css'
function SideBar() {
  return (
    <div className='sidebar'>
      <div className="icons">
        <i class="fa fa-home" aria-hidden="true"></i>
        
        <div className="icon-name">
          <p style={{marginLeft:"-10px",marginTop:"-5px"}}>Home</p>
        </div>
        <i class="fa fa-superpowers" aria-hidden="true"></i>
        <div className="icon-name">
          <p style={{marginLeft:"-10px",marginTop:"-5px"}}>Shorts</p>
        </div>
        <i class="fa fa-video-camera" aria-hidden="true"></i>
        <div className="icon-name">
          <p style={{ marginLeft: "-20px",marginTop:"-5px" }}>Subscriptions</p>
        </div>
        <i class="fa fa-window-restore" aria-hidden="true"></i>
        <div className="icon-name">
          <p style={{marginLeft:"-10px",marginTop:"-5px"}}>You</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar
