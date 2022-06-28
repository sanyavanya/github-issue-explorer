import styles from "./UserRepos.module.css";

import React from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../../../constants/gql";
import { Repository } from "../../../types/interfaces";

import RepoCard from "./RepoCard";
import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Title from "../../ui/Title";

interface Props {
  userName: string | undefined;
}

export default function UserRepos({ userName }: Props) {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    variables: { userName },
  });

  const repositories = data?.user.repositories;

  if (loading) return <Loading />;
  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      <Title>{repositories.totalCount} Repositories</Title>

      {repositories.nodes.map((node: Repository) => (
        <RepoCard repo={node} key={node.databaseId} />
      ))}
    </div>
  );
}
