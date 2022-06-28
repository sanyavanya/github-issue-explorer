import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import IssuePage from "./components/pages/IssuePage/IssuePage";
import NewIssuePage from "./components/pages/NewIssuePage/NewIssuePage";
import RepoPage from "./components/pages/RepoPage/RepoPage";
import UserPage from "./components/pages/UserPage/UserPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:userName" element={<UserPage />} />
          <Route path="/:userName/:repoName" element={<RepoPage />} />
          <Route
            path="/:userName/:repoName/:issueNumber"
            element={<IssuePage />}
          />
          <Route path="/:userName/:repoName/new" element={<NewIssuePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
