import React from "react";


class VideoList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      userInput: "",
      results: [],
      videos: []
    }
  }

   
  //   componentDidMount() {
  //   fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.props.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     //  console.log(data)
  //     this.setState({
  //       videos: data.snippet
  //     })
  //   })
  // }

  // componentDidUpdate(prevProps) {
  //   console.log(this.props.userInput, prevProps.userInput)
  //   if (this.props.userInput !== prevProps.userInput) {
  //     console.log("Success")
  //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${this.props.userInput}&type=video&key=${process.env.REACT_APP_KEY}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     //  console.log(data)
  //     this.setState({
  //       videos: data.snippet
  //     })
  //   })
  //   }

  // }

render() {
    // videosToDisplay = props.videos.map((video) => {
    //   return <VideoCard vid={video} />;
    // });

    return <div></div>;
}
}




export default VideoList 
