import React from 'react'
import '../styles/Nav-Center.css'

function NavCenter() {
  return (
    <div className='center-container' style={{ display: "flex" }}>
      <input type="text" placeholder='search' />
      <div className="search-icon">
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="mike-icon">
        <i className="fa fa-microphone" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default NavCenter
