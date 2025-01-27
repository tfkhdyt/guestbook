/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { type ScalarsEnumsHash } from "gqty";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Any: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any };
  File: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any };
  /** Custom scalar that handles both integers and floats */
  Number: { input: number; output: number };
  /** Represents NULL values */
  Void: { input: any; output: any };
}

export interface UserCreateWithoutMessageInputInput {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username: Scalars["String"]["input"];
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  Any: true,
  Boolean: true,
  DateTimeISO: true,
  File: true,
  JSON: true,
  JSONObject: true,
  Number: true,
  String: true,
  Void: true,
};
export const generatedSchema = {
  BatchPayload: {
    __typename: { __type: "String!" },
    count: { __type: "Number!" },
  },
  Creator: {
    __typename: { __type: "String!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    username: { __type: "String!" },
  },
  Creator_1: {
    __typename: { __type: "String!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    username: { __type: "String!" },
  },
  DataAndData_1: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    creator: { __type: "Creator!" },
    id: { __type: "Number!" },
    updatedAt: { __type: "DateTimeISO!" },
  },
  Get: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    updatedAt: { __type: "DateTimeISO!" },
    userId: { __type: "Number!" },
  },
  Get_1AndGet_2: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    creator: { __type: "Creator_1!" },
    id: { __type: "Number!" },
    updatedAt: { __type: "DateTimeISO!" },
  },
  HealthCheck: {
    __typename: { __type: "String!" },
    status: { __type: "String!" },
  },
  List: {
    __typename: { __type: "String!" },
    data: { __type: "[Get!]!" },
    meta: { __type: "Meta!" },
  },
  List_1: {
    __typename: { __type: "String!" },
    data: { __type: "[DataAndData_1!]!" },
    meta: { __type: "Meta!" },
  },
  Me: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    updatedAt: { __type: "DateTimeISO!" },
    username: { __type: "String!" },
  },
  Meta: {
    __typename: { __type: "String!" },
    hasNextPage: { __type: "Boolean!" },
    hasPreviousPage: { __type: "Boolean!" },
    page: { __type: "Number!" },
    perPage: { __type: "Number!" },
    total: { __type: "Number!" },
    totalPages: { __type: "Number!" },
  },
  MyMessages: {
    __typename: { __type: "String!" },
    get: { __type: "Get", __args: { id: "Number!" } },
    list: { __type: "List!", __args: { page: "Number", perPage: "Number" } },
  },
  PublicMessages: {
    __typename: { __type: "String!" },
    get: { __type: "Get_1AndGet_2", __args: { id: "Number!" } },
    list: { __type: "List_1!", __args: { page: "Number", perPage: "Number" } },
  },
  RegisterUser: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    password: { __type: "String!" },
    updatedAt: { __type: "DateTimeISO!" },
    username: { __type: "String!" },
  },
  UserCreateWithoutMessageInputInput: {
    createdAt: { __type: "String" },
    name: { __type: "String" },
    password: { __type: "String!" },
    updatedAt: { __type: "String" },
    username: { __type: "String!" },
  },
  mutation: {
    __typename: { __type: "String!" },
    createMessage: { __type: "Get!", __args: { content: "String!" } },
    deleteMessage: { __type: "BatchPayload!", __args: { ids: "[Number!]!" } },
    loginUser: {
      __type: "RegisterUser!",
      __args: { password: "String!", username: "String!" },
    },
    logoutUser: { __type: "Void" },
    registerUser: {
      __type: "RegisterUser!",
      __args: { data: "UserCreateWithoutMessageInputInput!" },
    },
    updateMessage: {
      __type: "Get!",
      __args: { content: "String!", id: "Number!" },
    },
  },
  query: {
    __typename: { __type: "String!" },
    healthCheck: { __type: "HealthCheck!" },
    me: { __type: "Me!" },
    myMessages: { __type: "MyMessages!" },
    publicMessages: { __type: "PublicMessages!" },
  },
  subscription: {},
} as const;

export interface BatchPayload {
  __typename?: "BatchPayload";
  count: ScalarsEnums["Number"];
}

export interface Creator {
  __typename?: "Creator";
  id: ScalarsEnums["Number"];
  name?: Maybe<ScalarsEnums["String"]>;
  username: ScalarsEnums["String"];
}

export interface Creator_1 {
  __typename?: "Creator_1";
  id: ScalarsEnums["Number"];
  name?: Maybe<ScalarsEnums["String"]>;
  username: ScalarsEnums["String"];
}

export interface DataAndData_1 {
  __typename?: "DataAndData_1";
  content: ScalarsEnums["String"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  createdAt: ScalarsEnums["DateTimeISO"];
  creator: Creator;
  id: ScalarsEnums["Number"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  updatedAt: ScalarsEnums["DateTimeISO"];
}

export interface Get {
  __typename?: "Get";
  content: ScalarsEnums["String"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  createdAt: ScalarsEnums["DateTimeISO"];
  id: ScalarsEnums["Number"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  updatedAt: ScalarsEnums["DateTimeISO"];
  userId: ScalarsEnums["Number"];
}

export interface Get_1AndGet_2 {
  __typename?: "Get_1AndGet_2";
  content: ScalarsEnums["String"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  createdAt: ScalarsEnums["DateTimeISO"];
  creator: Creator_1;
  id: ScalarsEnums["Number"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  updatedAt: ScalarsEnums["DateTimeISO"];
}

export interface HealthCheck {
  __typename?: "HealthCheck";
  status: ScalarsEnums["String"];
}

export interface List {
  __typename?: "List";
  data: Array<Get>;
  meta: Meta;
}

export interface List_1 {
  __typename?: "List_1";
  data: Array<DataAndData_1>;
  meta: Meta;
}

export interface Me {
  __typename?: "Me";
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  createdAt: ScalarsEnums["DateTimeISO"];
  id: ScalarsEnums["Number"];
  name?: Maybe<ScalarsEnums["String"]>;
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  updatedAt: ScalarsEnums["DateTimeISO"];
  username: ScalarsEnums["String"];
}

export interface Meta {
  __typename?: "Meta";
  hasNextPage: ScalarsEnums["Boolean"];
  hasPreviousPage: ScalarsEnums["Boolean"];
  page: ScalarsEnums["Number"];
  perPage: ScalarsEnums["Number"];
  total: ScalarsEnums["Number"];
  totalPages: ScalarsEnums["Number"];
}

export interface MyMessages {
  __typename?: "MyMessages";
  get: (args: { id: ScalarsEnums["Number"] }) => Maybe<Get>;
  list: (args?: {
    page?: Maybe<ScalarsEnums["Number"]>;
    perPage?: Maybe<ScalarsEnums["Number"]>;
  }) => List;
}

export interface PublicMessages {
  __typename?: "PublicMessages";
  get: (args: { id: ScalarsEnums["Number"] }) => Maybe<Get_1AndGet_2>;
  list: (args?: {
    page?: Maybe<ScalarsEnums["Number"]>;
    perPage?: Maybe<ScalarsEnums["Number"]>;
  }) => List_1;
}

export interface RegisterUser {
  __typename?: "RegisterUser";
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  createdAt: ScalarsEnums["DateTimeISO"];
  id: ScalarsEnums["Number"];
  name?: Maybe<ScalarsEnums["String"]>;
  password: ScalarsEnums["String"];
  /**
   * Enables basic storage and retrieval of dates and times.
   */
  updatedAt: ScalarsEnums["DateTimeISO"];
  username: ScalarsEnums["String"];
}

export interface Mutation {
  __typename?: "Mutation";
  createMessage: (args: { content: ScalarsEnums["String"] }) => Get;
  deleteMessage: (args: { ids: Array<ScalarsEnums["Number"]> }) => BatchPayload;
  loginUser: (args: {
    password: ScalarsEnums["String"];
    username: ScalarsEnums["String"];
  }) => RegisterUser;
  logoutUser?: Maybe<ScalarsEnums["Void"]>;
  registerUser: (args: {
    data: UserCreateWithoutMessageInputInput;
  }) => RegisterUser;
  updateMessage: (args: {
    content: ScalarsEnums["String"];
    id: ScalarsEnums["Number"];
  }) => Get;
}

export interface Query {
  __typename?: "Query";
  healthCheck: HealthCheck;
  me: Me;
  myMessages: MyMessages;
  publicMessages: PublicMessages;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type ScalarsEnums = {
  [Key in keyof Scalars]: Scalars[Key] extends { output: unknown }
    ? Scalars[Key]["output"]
    : never;
} & {};
