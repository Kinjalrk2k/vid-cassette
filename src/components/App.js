import React from "react";
import SearchBar from "./SearchBar";
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Grid,
} from "@material-ui/core";

import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API,
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">vidCasseTTe</Typography>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container spacing={3}>
            <Grid xs={12} sm={9} item></Grid>
            <Grid xs={12} sm={3} item>
              <VideoList videos={this.state.videos} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
