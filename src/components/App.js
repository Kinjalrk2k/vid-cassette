import React from "react";
import SearchBar from "./SearchBar";
import {
  Container,
  AppBar,
  Typography,
  Toolbar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    term: "",
    videos: [],
    selectedVideo: null,
    nextPageToken: null,
    prevPageToken: null,
  };

  onTermSubmit = async (term, pageToken = null) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: process.env.REACT_APP_YOUTUBE_API,
        q: term,
        pageToken,
      },
    });

    this.setState({
      term,
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      nextPageToken: response.data.nextPageToken,
      prevPageToken: response.data.prevPageToken,
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  renderNavigation() {}

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
            <Grid xs={12} sm={9} item>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid xs={12} sm={3} item>
              <BottomNavigation showLabels style={{ marginTop: "1rem" }}>
                <BottomNavigationAction
                  label="Previous"
                  value="recents"
                  disabled={!this.state.prevPageToken}
                  icon={<NavigateBefore />}
                  onClick={() =>
                    this.onTermSubmit(this.state.term, this.state.prevPageToken)
                  }
                />
                <BottomNavigationAction
                  label="Next"
                  value="favorites"
                  disabled={!this.state.nextPageToken}
                  icon={<NavigateNext />}
                  onClick={() =>
                    this.onTermSubmit(this.state.term, this.state.nextPageToken)
                  }
                />
              </BottomNavigation>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
