import React from "react";
import YouTube from "react-youtube";

class VideoCard extends React.Component {
    
    render() {
        const {title, thumbnails} = this.props.vid.snippet


    return (
        <div>
            {/* <YouTube opt={opts}/> */}
            <p>{title}</p>
            <img src={thumbnails.default.url} />
        </div>
    )
}
}


export default VideoCard