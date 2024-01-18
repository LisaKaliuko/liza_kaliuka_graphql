import { gql } from '@apollo/client';

type PostType = {
  id: string;
  title: string;
  content: string;
};

type User = {
  id: string;
  username: string;
  age: number;
  posts: Array<PostType>;
};

export type UserResponseType = {
  getAllUsers: User[];
};

export const GET_ALL_USERS = gql`
  query allUsers {
    getAllUsers {
      id
      username
      age
      posts {
        id
        title
        content
      }
    }
  }
`;
