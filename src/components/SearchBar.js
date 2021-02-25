import React from "react";
import { TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form style={{ width: "100%" }} onSubmit={this.onFormSubmit}>
        <TextField
          id="searchBar"
          label="Search"
          style={{ margin: 8, color: "black" }}
          helperText="Just using YouTube public APIs!"
          fullWidth
          margin="normal"
          variant="filled"
          color="secondary"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
