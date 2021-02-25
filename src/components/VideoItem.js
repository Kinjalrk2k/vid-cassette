import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";

class VideoItem extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: "1rem" }}>
        <CardMedia
          image={this.props.video.snippet.thumbnails.high.url}
          title="Paella dish"
          style={{ height: 0, paddingTop: "56.25%" }}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {this.props.video.snippet.title}
          </Typography>
          <Typography color="textSecondary">
            {this.props.video.snippet.channelTitle}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default VideoItem;
