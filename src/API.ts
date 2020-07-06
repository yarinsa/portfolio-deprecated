/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  description: string,
  images: Array< string >,
  additionalText: Array< ParagraphInput >,
  url: string,
  git: string,
  technologies: Array< string >,
  _version?: number | null,
};

export type ParagraphInput = {
  header: string,
  content: string,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  url?: ModelStringInput | null,
  git?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  images?: Array< string > | null,
  additionalText?: Array< ParagraphInput > | null,
  url?: string | null,
  git?: string | null,
  technologies?: Array< string > | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateTechnologyInput = {
  id: string,
  name: string,
  image: string,
  _version?: number | null,
};

export type ModelTechnologyConditionInput = {
  name?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTechnologyConditionInput | null > | null,
  or?: Array< ModelTechnologyConditionInput | null > | null,
  not?: ModelTechnologyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTechnologyInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteTechnologyInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  images?: ModelStringInput | null,
  url?: ModelStringInput | null,
  git?: ModelStringInput | null,
  technologies?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelTechnologyFilterInput = {
  id?: ModelStringInput | null,
  name?: ModelIDInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTechnologyFilterInput | null > | null,
  or?: Array< ModelTechnologyFilterInput | null > | null,
  not?: ModelTechnologyFilterInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTechnologyMutationVariables = {
  input: CreateTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type CreateTechnologyMutation = {
  createTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTechnologyMutationVariables = {
  input: UpdateTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type UpdateTechnologyMutation = {
  updateTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTechnologyMutationVariables = {
  input: DeleteTechnologyInput,
  condition?: ModelTechnologyConditionInput | null,
};

export type DeleteTechnologyMutation = {
  deleteTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string,
      images: Array< string >,
      additionalText:  Array< {
        __typename: "Paragraph",
        header: string,
        content: string,
      } >,
      url: string,
      git: string,
      technologies: Array< string >,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      description: string,
      images: Array< string >,
      additionalText:  Array< {
        __typename: "Paragraph",
        header: string,
        content: string,
      } >,
      url: string,
      git: string,
      technologies: Array< string >,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncTechnologiesQueryVariables = {
  filter?: ModelTechnologyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTechnologiesQuery = {
  syncTechnologies:  {
    __typename: "ModelTechnologyConnection",
    items:  Array< {
      __typename: "Technology",
      id: string,
      name: string,
      image: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetTechnologyQueryVariables = {
  id: string,
};

export type GetTechnologyQuery = {
  getTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTechnologysQueryVariables = {
  filter?: ModelTechnologyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTechnologysQuery = {
  listTechnologys:  {
    __typename: "ModelTechnologyConnection",
    items:  Array< {
      __typename: "Technology",
      id: string,
      name: string,
      image: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    name: string,
    description: string,
    images: Array< string >,
    additionalText:  Array< {
      __typename: "Paragraph",
      header: string,
      content: string,
    } >,
    url: string,
    git: string,
    technologies: Array< string >,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTechnologySubscription = {
  onCreateTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTechnologySubscription = {
  onUpdateTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTechnologySubscription = {
  onDeleteTechnology:  {
    __typename: "Technology",
    id: string,
    name: string,
    image: string,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
