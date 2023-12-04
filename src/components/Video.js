import React from 'react'
import '../styles/video.css'

function Video(props)  {
  return (
    <div className='video-container'>
        <div className="thumbnail">
            <img src={props.thumbnail} alt="" style={{height: "100%", width: "100%",cursor:"pointer"}}/>
        </div>
        
        {/* <iframe className='thumbnail' width="330" height="230" src="https://www.youtube.com/embed/xvm3X1oyTL8?si=uDOxNUfPb1pmf7tL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        <div className="video-info">
            <div className="channel-img">

            </div>
            <div className="channel-info">
                <h5 className='video-title'>
                Tom &amp; Jerry | Tom &amp; Jerry in Full Screen | Classic Cartoon Compilation | WB Kids by WB Kids 523,429,709 views 2 years ago 21 minutes
                </h5>
                <p className='channel-name'>Cartoon</p>
                <p className='view-count'> <span className="views">1.1M</span> <span className="upload-time">13 hours ago</span></p>
            </div>
        </div>
      
    </div>
  )
}

export default Video
