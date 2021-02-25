import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos } = this.props;

    const renderedList = videos.map((video) => {
      return <VideoItem video={video} />;
    });

    return <div>{renderedList}</div>;
  }
}

export default VideoList;
