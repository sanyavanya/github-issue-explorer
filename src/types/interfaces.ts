export interface Author {
  login: string;
}

export interface Comment {
  author: Author;
  bodyText: string;
  createdAt: string;
  databaseId: number;
}

export interface Comments {
  nodes: Comment[];
  totalCount: number;
}

export interface Issue {
  author: Author;
  comments: Comments;
  createdAt: string;
  number: number;
  title: string;
}

export interface Issues {
  nodes: Issue[];
  totalCount: number;
}

export interface Repository {
  databaseId: number;
  issues: Issues;
  totalCount: number;
  name: string;
  url: string;
}
