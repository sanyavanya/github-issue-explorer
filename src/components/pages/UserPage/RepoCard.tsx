import styles from "./RepoCard.module.css";

import React from "react";
import { Link } from "react-router-dom";

import { Repository } from "../../../types/interfaces";

interface Props {
  repo: Repository;
}

export default function RepoCard({ repo }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <Link to={repo.name}>{repo.name}</Link>
      </div>
      <div className={styles.totalCount}>{repo.issues.totalCount} issues</div>
    </div>
  );
}
