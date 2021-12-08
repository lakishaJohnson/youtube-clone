import React from "react";
import VideoCard from "./VideoCard";


class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: "",
      results: "",
      videos: []
    }
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      results: this.state.userInput 
    })
    this.fetchVideos()
  }
  
  fetchVideos() {
    // console.log("Success")
    if(this.state.userInput === 0) return;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
    .then(res => res.json())
    .then((data) => {
       console.log(data)
      this.setState({
        videos: data.items,
        userInput: "",
      })
    })
  }
  //   componentDidMount = () => {
  //   this.fetchVideos()
  // }
    

  render() {
    const videosToDisplay = this.state.videos.map((video, i) => {
      return (<VideoCard vid={video} key={i} />);
    });
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
        type="text" 
        placeholder="search..." 
        id="search" 
        value={this.state.userInput}
        onChange={this.handleUserInput} />
        <button type="submit">Search</button>
        <p>{this.state.results}</p>
        </form>
        {videosToDisplay}
      </div>
    );
  }
}
export default Home;