import React from "react";
import styles from "./styles.scss";

const TileLayout = ({ children, columnCount }) => (
  <div className={styles.tileBlock}>
    <div className={styles.tileLayout} data-column-count={columnCount}>
      {children}
    </div>
  </div>
)

export default TileLayout;