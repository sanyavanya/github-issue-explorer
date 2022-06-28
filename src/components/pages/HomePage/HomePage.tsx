import styles from "./HomePage.module.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import Title from "../../ui/Title";
import Input from "../../ui/Input";

export default function HomePage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  function handleUserNameChange(e: React.ChangeEvent) {
    setUserName((e.target as HTMLInputElement).value);
  }

  function handleSubmit() {
    navigate(userName);
  }

  return (
    <div className={styles.container}>
      <Title>Enter a GitHub username:</Title>
      <form onSubmit={handleSubmit}>
        <Input value={userName} onChange={handleUserNameChange} />
        <Button type="submit">Open profile</Button>
      </form>
    </div>
  );
}
