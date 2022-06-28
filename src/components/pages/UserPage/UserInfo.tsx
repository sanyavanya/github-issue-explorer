import styles from "./UserInfo.module.css";

import React from "react";
import { useQuery } from "@apollo/client";

import { GET_USER } from "../../../constants/gql";

import Error from "../../ui/Error";
import Loading from "../../ui/Loading";

interface Props {
  userName: string | undefined;
}

export default function UserInfo({ userName }: Props) {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userName },
  });

  const user = data?.user;

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={user.avatarUrl} alt="User" className={styles.avatar} />
        <div className={styles.name}>{user.name}</div>
        <div className={styles.login}>{user.login}</div>
        <div className={styles.company}>{user.company}</div>
        <div className={styles.followers}>
          <b>{user.followers.totalCount}</b>&nbsp;followers •{" "}
          <b>{user.following.totalCount}</b>&nbsp;following
        </div>
      </div>
    </div>
  );
}
