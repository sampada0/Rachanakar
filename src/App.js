
import React from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import SideBar from './components/SideBar'
import AllVideo from './components/AllVideo'
// import Video from './components/Video'

function App() {
  return (
    
    <div className='navbar'>
     <NavigationBar/>
      <div style={{display:"flex"}}>
      <SideBar/>
      {/* <video/> */}
      <AllVideo/>
      </div>
    </div>

    

  )
}

export default App
