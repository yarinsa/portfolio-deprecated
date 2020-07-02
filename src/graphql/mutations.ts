/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
      technologies {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
      technologies {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
      technologies {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTechnology = /* GraphQL */ `
  mutation CreateTechnology(
    $input: CreateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    createTechnology(input: $input, condition: $condition) {
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
export const updateTechnology = /* GraphQL */ `
  mutation UpdateTechnology(
    $input: UpdateTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    updateTechnology(input: $input, condition: $condition) {
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
export const deleteTechnology = /* GraphQL */ `
  mutation DeleteTechnology(
    $input: DeleteTechnologyInput!
    $condition: ModelTechnologyConditionInput
  ) {
    deleteTechnology(input: $input, condition: $condition) {
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
