import styles from "./RepoPage.module.css";

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../../../constants/gql";
import { Issue } from "../../../types/interfaces";

import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Title from "../../ui/Title";
import IssueCard from "./IssueCard";

export default function RepoPage() {
  const { userName, repoName } = useParams();

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { userName, repoName },
  });

  const repository = data?.user.repository;

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <Title>
        <Link to={"/" + userName}>{userName}</Link>&nbsp;/ {String(repoName)}
      </Title>
      <div className={styles.stats}>
        <b>{repository.forkCount}</b> forks •{" "}
        <b>{repository.watchers.totalCount}</b> watching •{" "}
        <b>{repository.issues.totalCount}</b> issues
      </div>
      <div className={styles.description}>{repository.description}</div>
      <Title>
        Issues{" "}
        <Button type="button">
          <Link to={`/${userName}/${repoName}/new`}>Create New</Link>
        </Button>
      </Title>
      {repository.issues.nodes.map((issue: Issue) => (
        <IssueCard key={issue.number} issue={issue} />
      ))}
    </div>
  );
}
