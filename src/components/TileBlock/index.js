import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const TileBlock = ({ title, imageUrl, notificationCount}) => {
  return (
    <div className="tileBlock" data-notification-count={notificationCount === 0 ? "" : notificationCount}>
      <h1>{title}</h1>
      <img src={imageUrl} alt="Tile Image" />
    </div>
  )
}

TileBlock.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  notificationCount:PropTypes.number,
}

TileBlock.defaultProps = {
  title: "",
  imageUrl: "",
  notificationCount: 0,
}

export default TileBlock;

// Todo: 
// get scss running 
// try to import scss
