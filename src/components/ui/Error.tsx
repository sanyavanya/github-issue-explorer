import styles from "./Error.module.css";

import React from "react";

interface Props {
  children?: string;
}

export default function Error({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <div className={styles.bar1} />
        <div className={styles.bar2} />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
}
