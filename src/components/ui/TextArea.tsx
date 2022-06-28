import styles from "./Input.module.css";

import React from "react";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler;
}

export default function TextArea({ value, onChange }: Props) {
  return (
    <textarea className={styles.container} value={value} onChange={onChange} />
  );
}
