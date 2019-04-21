import gql from 'graphql-tag';
import { OperationVariables } from 'react-apollo';

import { GameId, UserId } from '../models';

export interface GetUserByEmailQueryVariables extends OperationVariables {
  email: string,
}

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!){
    users(where: {email: {_eq: $email}}) {
      id
    }
  }
`;

export interface LoginQueryVariables extends OperationVariables {
  email: string,
  password: string;
}

export const LOGIN = gql`
  query loginUser($email: String!, $password: String!){
    users(where: {_and: {email: {_eq: $email}, password: {_eq: $password}}}) {
      username
      id
      character
      email
      active_game
    }
  }
`;

export interface GetGameQueryVariables extends OperationVariables {
  title: string;
}

export const GET_GAME = gql`
  query getGame($title: String!){
    games(where: {title: {_eq: $title}}) {
      creator
      id
      modified
      title
      game_data
    }
  }
`;

export interface GetGameByIdQueryVariables extends OperationVariables {
  gameId?: GameId;
}

export const GET_GAME_BY_ID = gql`
  query getGameById($gameId: uuid!){
    games(where: {id: {_eq: $gameId}}) {
      creator
      id
      modified
      title
      game_data
    }
  }
`;


export interface GetUserQueryVariables extends OperationVariables {
  userId: UserId,
}

export const GET_USER = gql`
  query getUser($userId: uuid!){
    users(where: {id: {_eq: $userId}}) {
      active_game
      character
      email
      id
      modified
      username
    }
  }
`;

export interface GetActiveUsersQueryVariables extends OperationVariables {
  gameId: GameId;
}

export const GET_ACTIVE_USERS = gql`
  query getUser($gameId: uuid!){
    users(where: {active_game: {_eq: $gameId}}) {
      active_game
      character
      email
      id
      username
    }
  }
`;

