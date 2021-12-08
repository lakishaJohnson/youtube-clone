import React from "react";
import YouTube from "react-youtube";

class VideoCard extends React.Component {
    
    render() {
        const {title} = this.props.vid.snippet

        const opts = {
            height: '390',
            width: '640',

    }

    return (
        <div>
            <YouTube opt={opts}/>
            <p>{title}</p>
        </div>
    )
}
}


export default VideoCard