import React from 'react'
import NavLeft from './NavLeft'
import NavCenter from './NavCenter'
import NavRight from './NavRight'
import '../styles/NavigationBar.css'


function NavigationBar() {
  return (
    <div className='MainNav' style={{display:"flex"}}>
      <NavLeft/>
      <NavCenter/>
      <NavRight/>
    </div>
  )
}

export default NavigationBar
