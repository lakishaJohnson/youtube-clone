import React from "react";
import YouTube from "react-youtube";
import Comments from "./Comments";
import { useParams } from "react-router-dom"

const VideoView = () => {
    // console.log(useParams())
      const opts = {
          height: '360',
          width: '480',
      }
      let preview = useParams()
    
    //   const { title } = this.props.vid.snippet
  return (
      <div>
          <YouTube videoId={preview.id} opts={opts} />
          {/* <p>{title.title}</p>  */}
          <hr></hr>
          <Comments />
      </div>
  )
}

            
           




export default VideoView; 