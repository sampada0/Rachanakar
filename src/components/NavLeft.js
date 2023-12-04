import React from 'react'
import '../styles/NavLeft.css'

function NavLeft() {
  return (
    <div className='left-container'>
        <div className="menu-bar">
        <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="youtube-logo">
      <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
      <div className="logo-text">
        YouTube
      </div>
    </div>

  )
}

export default NavLeft
