import React from "react";
//import "../VideoCard.css";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
  render() {
    const { title, thumbnails } = this.props.vid.snippet;

    return (
      <div className="search-results">
        <Link to={`/videos/:${this.props.vid.id.videoId}`}>
          <p>{title}</p>
          <img src={thumbnails.default.url} alt="video thumbnails" />
        </Link>
      </div>
    );
  }
}

export default VideoCard;
