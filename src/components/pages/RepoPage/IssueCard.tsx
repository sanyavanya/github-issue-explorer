import styles from "./IssueCard.module.css";

import React from "react";
import { Link } from "react-router-dom";

import { Issue } from "../../../types/interfaces";
import formatDate from "../../../utils/formatDate";

interface Props {
  issue: Issue;
}

export default function IssueCard({ issue }: Props) {
  return (
    <div className={styles.container}>
      <Link to={issue.number.toString()} className={styles.title}>
        {issue.title}
      </Link>
      <div>
        #{issue.number} opened on {formatDate(issue.createdAt)} by{" "}
        <Link to={"/" + issue.author.login}>{issue.author.login}</Link> •{" "}
        {issue.comments.totalCount} comments
      </div>
    </div>
  );
}
