import React from "react";
import { TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  render() {
    return (
      <TextField
        id="filled-full-width"
        label="Search"
        style={{ margin: 8, color: "black" }}
        helperText="Just using YouTube public APIs!"
        fullWidth
        margin="normal"
        variant="filled"
        color="secondary"
      />
    );
  }
}

export default SearchBar;
