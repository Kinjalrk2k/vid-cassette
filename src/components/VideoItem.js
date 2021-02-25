import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from "@material-ui/core";

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;

    return (
      <Card style={{ marginTop: "1rem" }}>
        <CardActionArea onClick={() => onVideoSelect(video)}>
          <CardMedia
            image={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            style={{ height: 0, paddingTop: "56.25%" }}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {video.snippet.title}
            </Typography>
            <Typography color="textSecondary">
              {video.snippet.channelTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default VideoItem;
