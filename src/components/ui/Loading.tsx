import styles from "./Loading.module.css";

import React from "react";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <div className={styles.inner} />
      </div>
    </div>
  );
}
