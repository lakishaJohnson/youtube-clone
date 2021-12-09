import React from "react";
import VideoCard from "./VideoCard";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      results: "",
      videos: []
    }
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      results: this.state.userInput,
    })
    this.fetchVideos()
  }
  
  fetchVideos() {
    // console.log("Success")
    if(this.state.userInput === 0) return;
    this.props.disableClear()

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
    .then(res => res.json())
    .then((data) => {
      //  console.log(data)
      this.setState({
        videos: data.items,
        userInput: "",
      })
    })
  }
    static getDerivedStateFromProps(props, state) {
    return {
      results: props.clear ? [] : state.results,
      videos: props.clear ? [] : state.videos,
    };
  }

  render() {
    const videosToDisplay = this.state.videos.map((video, i) => {
      return <VideoCard vid={video} key={i} />;
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
          <input
            type="text"
            placeholder="search..."
            id="search"
            value={this.state.userInput}
            onChange={this.handleUserInput}
          />
          <button type="submit">Search</button>
          <p>{this.state.results}</p>
=======
          <input 
        type="text" 
        placeholder="Search..." 
        id="search" 
        value={this.state.userInput}
        onChange={this.handleUserInput} />
        <button 
        type="submit">Search</button>
>>>>>>> 164ef7e73d53d62f664010ec460d8858b523ed15
        </form>
        {videosToDisplay}
      </div>
    );
  }
}
<<<<<<< HEAD
export default Home;
=======
        
        
export default Home;
>>>>>>> 164ef7e73d53d62f664010ec460d8858b523ed15
