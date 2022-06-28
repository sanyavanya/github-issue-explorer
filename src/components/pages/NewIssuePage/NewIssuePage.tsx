import styles from "./NewIssuePage.module.css";

import React, { useState } from "react";

import { CREATE_ISSUE, GET_REPOSITORY_ID } from "../../../constants/gql";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Title from "../../ui/Title";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function NewIssuePage() {
  const { userName, repoName } = useParams();
  const [issueTitle, setIssueTitle] = useState("");
  const [issueComment, setIssueComment] = useState("");

  const { data } = useQuery(GET_REPOSITORY_ID, {
    variables: { userName, repoName },
  });

  const [createIssue] = useMutation(CREATE_ISSUE);

  function handleIssueTitleChange(e: React.ChangeEvent) {
    setIssueTitle((e.target as HTMLInputElement).value);
  }

  function handleIssueCommentChange(e: React.ChangeEvent) {
    setIssueComment((e.target as HTMLInputElement).value);
  }

  function handleIssueSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    createIssue({
      variables: {
        title: issueTitle,
        body: issueComment,
        repositoryId: data.user.repository.databaseId,
      },
    });
  }

  return (
    <div className={styles.container}>
      <Title>Create a New Issue</Title>
      <form onSubmit={handleIssueSubmit}>
        Title:
        <Input value={issueTitle} onChange={handleIssueTitleChange} />
        Comment:
        <TextArea value={issueComment} onChange={handleIssueCommentChange} />
        <Button type="submit">Create Issue</Button>
      </form>
    </div>
  );
}
