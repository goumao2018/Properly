import React from "react";
import styles from "./styles.scss";

const BodyLayout = ({ children }) => (
  <div className={styles.bodyLayout}>{children}</div>
);

export default BodyLayout;
