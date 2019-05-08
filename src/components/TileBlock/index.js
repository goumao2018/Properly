import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const TileBlock = ({ title, imageUrl, notificationCount}) => {
  console.log(styles);
  return (
      <div className={styles.tileBlock} data-notification-count={notificationCount === 0 ? "" : notificationCount}>       
        <img className={styles.propertyImage} src={imageUrl} alt="Property type" />
        <div className={styles.propertyTitle}>{title}</div>
        {/* <h2 class="hey-component">Heyyy</h2> */}
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
