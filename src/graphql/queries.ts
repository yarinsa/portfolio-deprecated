/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        images
        additionalText {
          header
          content
        }
        url
        git
        technologies
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      images
      additionalText {
        header
        content
      }
      url
      git
      technologies
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        images
        additionalText {
          header
          content
        }
        url
        git
        technologies
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTechnologies = /* GraphQL */ `
  query SyncTechnologies(
    $filter: ModelTechnologyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTechnologies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTechnology = /* GraphQL */ `
  query GetTechnology($id: ID!) {
    getTechnology(id: $id) {
      id
      name
      image
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTechnologys = /* GraphQL */ `
  query ListTechnologys(
    $filter: ModelTechnologyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTechnologys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
