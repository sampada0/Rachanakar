import React from 'react'
import '../styles/AllVideos.css'
import Video from './Video'
import tom_and_jerry from '../assets/tom_n_jerry.webp'
import mahi from '../assets/mahi.jpeg'
import radha from'../assets/radha.jpg'
import react from '../assets/react.gif'
import uri from '../assets/uri.jpg'
import hawa from '../assets/hawa.jpg'
import three from '../assets/three.jpg'
import kishor from '../assets/kishor.jpg'
import web from '../assets/web.jpeg'
import mismatch from '../assets/mismatch.jpg'
import hacker from '../assets/hacker.jpg'
import sea from '../assets/sea.jpg'


function AllVideo() {
  return (
    <div style={{display:"flex",flexWrap:"wrap",marginTop:"35px",marginLeft:"35px"}}>
      <Video thumbnail={tom_and_jerry}/>

      <Video  thumbnail={web}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={radha}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={react}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={uri}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />

<Video  thumbnail={hawa}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={three}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={kishor}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={mahi}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={mismatch}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={hacker}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        <Video  thumbnail={sea}
          // title="Ram Siya Ram  | Lofi Version | Mangal Bhavan Amangal Hari | राम सिया राम"
          // channel="Idea Club Creations"
          // views="2.1M"
          // uptime="5 months ago"
        />
        
        
    </div>
    
  )
}

export default AllVideo
