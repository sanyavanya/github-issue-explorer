import styles from "./IssuePage.module.css";

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import { ADD_COMMENT, GET_ISSUE } from "../../../constants/gql";
import { Comment } from "../../../types/interfaces";
import formatDate from "../../../utils/formatDate";

import IssueComment from "./IssueComment";
import Title from "../../ui/Title";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import TextArea from "../../ui/TextArea";

export default function IssuePage() {
  const { userName, repoName, issueNumber } = useParams();

  const { loading, error, data } = useQuery(GET_ISSUE, {
    variables: { userName, repoName, issueNumber: Number(issueNumber) },
  });

  const issue = data?.user.repository.issue;

  const [addComment] = useMutation(ADD_COMMENT);

  const [comment, setComment] = useState("");
  function handleCommentChange(e: React.ChangeEvent) {
    setComment((e.target as HTMLInputElement).value);
  }

  function handleCommentSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    addComment({
      variables: {
        body: comment,
        subjectId: issue.databaseId,
      },
    });
  }

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <Title>
        <Link to={`/${userName}`}>{userName}</Link>&nbsp;/&nbsp;
        <Link to={`/${userName}/${repoName}`}>{repoName}</Link>&nbsp;/
        <br />#{issueNumber}: {issue.title}
      </Title>
      <div>
        <Link to={"/" + issue.author.login}>{issue.author.login}</Link> opened
        this issue on {formatDate(issue.createdAt)}
      </div>

      <div className={styles.commentSection}>
        <Title>Comments</Title>
        {issue.comments.nodes.map((comment: Comment) => (
          <IssueComment key={comment.databaseId} comment={comment} />
        ))}
        <form onSubmit={handleCommentSubmit}>
          <TextArea value={comment} onChange={handleCommentChange} />
          <Button type="submit">Comment</Button>
        </form>
      </div>
    </div>
  );
}
