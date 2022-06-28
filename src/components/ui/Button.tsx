import styles from "./Button.module.css";

import React, { MouseEventHandler } from "react";

import { Children } from "../../types/types";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  children: Children;
}

export default function Button({ type, disabled, onClick, children }: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.container}
    >
      {children}
    </button>
  );
}
