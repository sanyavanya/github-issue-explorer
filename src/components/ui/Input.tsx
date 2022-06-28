import styles from "./Input.module.css";

import React from "react";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler;
}

export default function Input({ value, onChange }: Props) {
  return (
    <input
      className={styles.container}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}
