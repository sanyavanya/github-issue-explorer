import styles from "./Title.module.css";

import React from "react";

import { Children } from "../../types/types";

interface Props {
  children: Children;
}

export default function Title({ children }: Props) {
  return <h1 className={styles.container}>{children}</h1>;
}
