import React from "react";
import SearchBar from "./SearchBar";
import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";

import youtube from "../apis/youtube";

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
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">vidCasseTTe</Typography>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Toolbar>
        </AppBar>
        <Container>{this.state.videos.length} videos found!</Container>
      </div>
    );
  }
}

export default App;
