import styles from "./UserPage.module.css";

import React from "react";
import { useParams } from "react-router-dom";

import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";

export default function UserPage() {
  const { userName } = useParams();

  return (
    <div className={styles.container}>
      <UserInfo userName={userName} />
      <UserRepos userName={userName} />
    </div>
  );
}
