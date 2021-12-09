import React from "react";

class VideoCard extends React.Component {
    
    render() {
        const {title, thumbnails} = this.props.vid.snippet
        

    return (
        <div>
            
            <img src={thumbnails.default.url} alt="video thumbnail"/>
            <p>{title}</p>
            
        </div>
    )
}
}


export default VideoCard