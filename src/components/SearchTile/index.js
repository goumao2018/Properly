import React, { Component } from "react";
import styles from "./styles.scss";

class SearchTile extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    const data = SearchTile.searchForWord(
      this.search.value,
      this.props.apartmentData
    );
    this.props.updateResult(data);
  };

  render() {
    console.log(this.state.query, "heyyyyyyyy i am query");
    return (
      <form>
        <input
          placeholder="Search property name"
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
    );
  }
}

//static type function
SearchTile.searchForWord = (word = "", data = []) => {
  return data.filter(item => item.title.toLowerCase().includes(word));
};
export default SearchTile;
