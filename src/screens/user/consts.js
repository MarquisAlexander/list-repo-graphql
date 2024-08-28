import {gql} from '@apollo/client';

export const GET_USER_AND_REPOS = gql`
  query ($login: String!, $first: Int!, $after: String) {
    user(login: $login) {
      id
      name
      login
      avatarUrl
      bio
      repositories(first: $first, after: $after) {
        totalCount
        edges {
          cursor
          node {
            id
            name
            description
            updatedAt
            url
            primaryLanguage {
              id
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
