import styles from "./IssueComment.module.css";

import React from "react";
import { Link } from "react-router-dom";

import { Comment } from "../../../types/interfaces";
import formatDate from "../../../utils/formatDate";

interface Props {
  comment: Comment;
}

export default function IssueComment({ comment }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to={"/" + comment.author.login}>{comment.author.login}</Link>{" "}
        commented on {formatDate(comment.createdAt)}:
      </div>
      <div>{comment.bodyText}</div>
    </div>
  );
}
