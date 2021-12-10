import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
// import Comments from "./Comments";

const VideoView = () => {
      console.log(useParams())
        const opts = {
            height: '390',
            width: '640',
        }
        let vidParam = useParams()
    return (
        <div>
            <YouTube videoId={vidParam.id} opts={opts}/>
        </div>
    )
}


export default VideoView; 