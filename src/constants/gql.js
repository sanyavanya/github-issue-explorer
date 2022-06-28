import { gql } from "@apollo/client";

export const GET_ISSUE = gql`
  query GetIssue($userName: String!, $repoName: String!, $issueNumber: Int!) {
    user(login: $userName) {
      login
      repository(name: $repoName) {
        issue(number: $issueNumber) {
          author {
            login
          }
          createdAt
          databaseId
          title
          comments(first: 10) {
            nodes {
              author {
                login
              }
              bodyText
              createdAt
              databaseId
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORIES = gql`
  query GetRepositories($userName: String!) {
    user(login: $userName) {
      repositories(first: 20) {
        totalCount
        nodes {
          databaseId
          name
          url
          issues(first: 20) {
            totalCount
            nodes {
              createdAt
              number
              title
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepo($userName: String!, $repoName: String!) {
    user(login: $userName) {
      repository(name: $repoName) {
        description
        forkCount
        issues(first: 10) {
          totalCount
          nodes {
            author {
              login
            }
            createdAt
            number
            title
            comments(first: 10) {
              totalCount
            }
          }
        }
        watchers {
          totalCount
        }
      }
    }
  }
`;

export const GET_REPOSITORY_ID = gql`
  query GetRepo($userName: String!, $repoName: String!) {
    user(login: $userName) {
      repository(name: $repoName) {
        node {
          id
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userName: String!) {
    user(login: $userName) {
      avatarUrl
      company
      followers {
        totalCount
      }
      following {
        totalCount
      }
      login
      name
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($body: String!, $subjectId: ID!) {
    addComment(input: { body: $body, subjectId: $subjectId }) {
      clientMutationId
    }
  }
`;

export const CREATE_ISSUE = gql`
  mutation CreateIssue($title: String!, $body: String!, $repositoryId: ID!) {
    createIssue(
      input: { body: $body, title: $title, repositoryId: $repositoryId }
    ) {
      issue {
        title
      }
    }
  }
`;
