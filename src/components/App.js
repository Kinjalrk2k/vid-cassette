import React from "react";
import SearchBar from "./SearchBar";
import { Container, AppBar, Typography, Toolbar } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">vidCasseTTe</Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <Container>Hello World!</Container>
      </div>
    );
  }
}

export default App;
