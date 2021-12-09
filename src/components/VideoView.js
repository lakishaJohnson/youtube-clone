import React from "react";
import YouTube from "react-youtube";

class VideoLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {videoId} = this.props.vid.id
        const {title} = this.props.vid.snippet
        

        const opts = {
            height: '390',
            width: '640',
        }

    return (
        <div>
            <YouTube videoId={videoId} opts={opts}/>
            <p>{title}</p>
            
            <Comments />
        </div>
    )
}

}


export default VideoLink; 