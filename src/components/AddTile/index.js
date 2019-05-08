import React, { Component } from "react";
import styles from "./styles.scss";

class AddTile extends Component {
  render() {
    console.log(this.props);
    const inputName = "blah name";
    const imageUrl = "http://placehold.it/100x200";
    const notificationCount = 2;

    return (
      <button
        onClick={() => {
          this.props.addTile(inputName, imageUrl, notificationCount);
        }}
      >
        Create Group
      </button>
    );
  }
}

export default AddTile;
