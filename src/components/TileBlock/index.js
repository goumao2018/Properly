import React from "react";
import PropTypes from "prop-types";

const TileBlock = ({ title, imageUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt="Tile Image" />
    </div>
  )
}

TileBlock.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string
}

TileBlock.defaultProps = {
  title: "",
  imageUrl: ""
}

export default TileBlock;