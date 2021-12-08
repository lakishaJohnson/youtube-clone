import React from "react";
import YouTube from "react-youtube";

class VideoCard extends React.Component {
    
    render() {

        const {title, thumbnails} = this.props.vid.snippet


        const opts = {
            height: '390',
            width: '640',

    }

    return (
        <div>

            <YouTube opt={opts} thumbnails={thumbnails}/>

            {/* <YouTube opt={opts}/> */}

            <p>{title}</p>
            <img src={thumbnails.default.url} />
        </div>
    )
}
}


export default VideoCard