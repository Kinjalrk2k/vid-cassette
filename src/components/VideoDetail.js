import React from "react";
import { Paper, Typography } from "@material-ui/core";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;

    if (!video) {
      return (
        <div
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" component="h2" color="textSecondary">
            Go on... Search for videos...!
          </Typography>
        </div>
      );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <Paper style={{ marginTop: "1rem" }}>
        <div style={{ paddingTop: "56.25%", position: "relative" }}>
          <iframe
            src={videoSrc}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            frameborder="0"
            allowfullscreen
            title="Video Player"
          />
        </div>
        <div style={{ padding: "1rem" }}>
          <Typography variant="h4" component="h2">
            {video.snippet.title}
          </Typography>
          <Typography color="textSecondary" style={{ marginBottom: "1rem" }}>
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="body2" component="p">
            {video.snippet.description}
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default VideoDetail;
