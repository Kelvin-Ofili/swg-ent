import React, { useState } from "react";
import styles from "./styles.module.scss";

const Hamburger: React.FC<{ toggle; onClick }> = ({ toggle, onClick }) => {
  return (
    <div
      className={
        toggle ? `${styles.container} ${styles.change}` : `${styles.container}`
      }
      onClick={onClick}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
};

export { Hamburger };
