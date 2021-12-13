import React from "react";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
    
  render() {
    const { title, thumbnails } = this.props.vid.snippet;
    
    return (
      <div>
        <Link to={`/videos/${this.props.vid.id.videoId}`}>
          <img src={thumbnails.default.url} alt="video thumbnails" />
        </Link>
        <p>
          <strong>{title}</strong>
        </p>
      </div>
    );
  }
}

export default VideoCard;
