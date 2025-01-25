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

export interface ConnectInputAndConnectInput_1 {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  Message?: InputMaybe<MessageListRelationFilterInput>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  OR?: InputMaybe<Array<UserWhereInputInput>>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
}

export interface MessageCreateWithoutCreatorInputInput {
  content: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
}

export interface MessageListRelationFilterInput {
  every?: InputMaybe<MessageWhereInputInput>;
  none?: InputMaybe<MessageWhereInputInput>;
  some?: InputMaybe<MessageWhereInputInput>;
}

export interface MessageUpdateInputInput {
  content?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutMessageNestedInputInput>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
}

export interface MessageWhereInputInput {
  AND?: InputMaybe<Array<InputMaybe<MessageWhereInputInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageWhereInputInput>>>;
  OR?: InputMaybe<Array<MessageWhereInputInput>>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  creator?: InputMaybe<WithoutInput_7AndUserWhereInputInput>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["Number"]["input"]>;
}

export interface ObjectAndUserUncheckedCreateWithoutMessageInputInput {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username: Scalars["String"]["input"];
}

export interface ObjectAndUserUncheckedUpdateWithoutMessageInputInput {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserCreateOrConnectWithoutMessageInputInput {
  create: ObjectAndUserUncheckedCreateWithoutMessageInputInput;
  where: ConnectInputAndConnectInput_1;
}

export interface UserCreateWithoutMessageInputInput {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username: Scalars["String"]["input"];
}

export interface UserUpdateOneRequiredWithoutMessageNestedInputInput {
  connect?: InputMaybe<ConnectInputAndConnectInput_1>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessageInputInput>;
  create?: InputMaybe<ObjectAndUserUncheckedCreateWithoutMessageInputInput>;
  update?: InputMaybe<WithoutInput_1AndUserUncheckedUpdateWithoutMessageInputInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessageInputInput>;
}

export interface UserUpsertWithoutMessageInputInput {
  create: ObjectAndUserUncheckedCreateWithoutMessageInputInput;
  update: ObjectAndUserUncheckedUpdateWithoutMessageInputInput;
  where?: InputMaybe<UserWhereInputInput>;
}

export interface UserWhereInputInput {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  Message?: InputMaybe<MessageListRelationFilterInput>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  OR?: InputMaybe<Array<UserWhereInputInput>>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
}

export interface WithoutInput_1AndUserUncheckedUpdateWithoutMessageInputInput {
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  data?: InputMaybe<Scalars["Void"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<Scalars["Void"]["input"]>;
}

export interface WithoutInput_7AndUserWhereInputInput {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  Message?: InputMaybe<MessageListRelationFilterInput>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInputInput>>>;
  OR?: InputMaybe<Array<UserWhereInputInput>>;
  createdAt?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Number"]["input"]>;
  is?: InputMaybe<Scalars["Void"]["input"]>;
  isNot?: InputMaybe<Scalars["Void"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
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
  Auth: { __typename: { __type: "String!" }, me: { __type: "Me!" } },
  Auth_1: {
    __typename: { __type: "String!" },
    login: {
      __type: "Register!",
      __args: { password: "String!", username: "String!" },
    },
    logout: { __type: "Void" },
    register: {
      __type: "Register!",
      __args: { data: "UserCreateWithoutMessageInputInput!" },
    },
  },
  BatchPayload: {
    __typename: { __type: "String!" },
    count: { __type: "Number!" },
  },
  ConnectInputAndConnectInput_1: {
    AND: { __type: "[UserWhereInputInput]" },
    Message: { __type: "MessageListRelationFilterInput" },
    NOT: { __type: "[UserWhereInputInput]" },
    OR: { __type: "[UserWhereInputInput!]" },
    createdAt: { __type: "String" },
    id: { __type: "Number" },
    name: { __type: "String" },
    password: { __type: "String" },
    updatedAt: { __type: "String" },
    username: { __type: "String" },
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
  FindAll: {
    __typename: { __type: "String!" },
    data: { __type: "[FindOne!]!" },
    meta: { __type: "Meta!" },
  },
  FindAll_1: {
    __typename: { __type: "String!" },
    data: { __type: "[DataAndData_1!]!" },
    meta: { __type: "Meta!" },
  },
  FindOne: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    updatedAt: { __type: "DateTimeISO!" },
    userId: { __type: "Number!" },
  },
  FindOne_1AndFindOne_2: {
    __typename: { __type: "String!" },
    content: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    creator: { __type: "Creator_1!" },
    id: { __type: "Number!" },
    updatedAt: { __type: "DateTimeISO!" },
  },
  Global: {
    __typename: { __type: "String!" },
    findAll: {
      __type: "FindAll_1!",
      __args: { page: "Number", perPage: "Number" },
    },
    findOne: { __type: "FindOne_1AndFindOne_2", __args: { id: "Number!" } },
  },
  Me: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    updatedAt: { __type: "DateTimeISO!" },
    username: { __type: "String!" },
  },
  MessageCreateWithoutCreatorInputInput: {
    content: { __type: "String!" },
    createdAt: { __type: "String" },
    updatedAt: { __type: "String" },
  },
  MessageListRelationFilterInput: {
    every: { __type: "MessageWhereInputInput" },
    none: { __type: "MessageWhereInputInput" },
    some: { __type: "MessageWhereInputInput" },
  },
  MessageUpdateInputInput: {
    content: { __type: "String" },
    createdAt: { __type: "String" },
    creator: { __type: "UserUpdateOneRequiredWithoutMessageNestedInputInput" },
    updatedAt: { __type: "String" },
  },
  MessageWhereInputInput: {
    AND: { __type: "[MessageWhereInputInput]" },
    NOT: { __type: "[MessageWhereInputInput]" },
    OR: { __type: "[MessageWhereInputInput!]" },
    content: { __type: "String" },
    createdAt: { __type: "String" },
    creator: { __type: "WithoutInput_7AndUserWhereInputInput" },
    id: { __type: "Number" },
    updatedAt: { __type: "String" },
    userId: { __type: "Number" },
  },
  Messages: {
    __typename: { __type: "String!" },
    global: { __type: "Global!" },
    mine: { __type: "Mine!" },
  },
  Messages_1: {
    __typename: { __type: "String!" },
    create: {
      __type: "FindOne!",
      __args: { data: "MessageCreateWithoutCreatorInputInput!" },
    },
    delete: { __type: "BatchPayload!", __args: { ids: "[Number!]!" } },
    update: {
      __type: "FindOne!",
      __args: { data: "MessageUpdateInputInput!", id: "Number!" },
    },
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
  Mine: {
    __typename: { __type: "String!" },
    findAll: {
      __type: "FindAll!",
      __args: { page: "Number", perPage: "Number" },
    },
    findOne: { __type: "FindOne", __args: { id: "Number!" } },
  },
  ObjectAndUserUncheckedCreateWithoutMessageInputInput: {
    createdAt: { __type: "String" },
    id: { __type: "Number" },
    name: { __type: "String" },
    password: { __type: "String!" },
    updatedAt: { __type: "String" },
    username: { __type: "String!" },
  },
  ObjectAndUserUncheckedUpdateWithoutMessageInputInput: {
    createdAt: { __type: "String" },
    id: { __type: "Number" },
    name: { __type: "String" },
    password: { __type: "String" },
    updatedAt: { __type: "String" },
    username: { __type: "String" },
  },
  Register: {
    __typename: { __type: "String!" },
    createdAt: { __type: "DateTimeISO!" },
    id: { __type: "Number!" },
    name: { __type: "String" },
    password: { __type: "String!" },
    updatedAt: { __type: "DateTimeISO!" },
    username: { __type: "String!" },
  },
  UserCreateOrConnectWithoutMessageInputInput: {
    create: { __type: "ObjectAndUserUncheckedCreateWithoutMessageInputInput!" },
    where: { __type: "ConnectInputAndConnectInput_1!" },
  },
  UserCreateWithoutMessageInputInput: {
    createdAt: { __type: "String" },
    name: { __type: "String" },
    password: { __type: "String!" },
    updatedAt: { __type: "String" },
    username: { __type: "String!" },
  },
  UserUpdateOneRequiredWithoutMessageNestedInputInput: {
    connect: { __type: "ConnectInputAndConnectInput_1" },
    connectOrCreate: { __type: "UserCreateOrConnectWithoutMessageInputInput" },
    create: { __type: "ObjectAndUserUncheckedCreateWithoutMessageInputInput" },
    update: {
      __type: "WithoutInput_1AndUserUncheckedUpdateWithoutMessageInputInput",
    },
    upsert: { __type: "UserUpsertWithoutMessageInputInput" },
  },
  UserUpsertWithoutMessageInputInput: {
    create: { __type: "ObjectAndUserUncheckedCreateWithoutMessageInputInput!" },
    update: { __type: "ObjectAndUserUncheckedUpdateWithoutMessageInputInput!" },
    where: { __type: "UserWhereInputInput" },
  },
  UserWhereInputInput: {
    AND: { __type: "[UserWhereInputInput]" },
    Message: { __type: "MessageListRelationFilterInput" },
    NOT: { __type: "[UserWhereInputInput]" },
    OR: { __type: "[UserWhereInputInput!]" },
    createdAt: { __type: "String" },
    id: { __type: "Number" },
    name: { __type: "String" },
    password: { __type: "String" },
    updatedAt: { __type: "String" },
    username: { __type: "String" },
  },
  WithoutInput_1AndUserUncheckedUpdateWithoutMessageInputInput: {
    createdAt: { __type: "String" },
    data: { __type: "Void" },
    id: { __type: "Number" },
    name: { __type: "String" },
    password: { __type: "String" },
    updatedAt: { __type: "String" },
    username: { __type: "String" },
    where: { __type: "Void" },
  },
  WithoutInput_7AndUserWhereInputInput: {
    AND: { __type: "[UserWhereInputInput]" },
    Message: { __type: "MessageListRelationFilterInput" },
    NOT: { __type: "[UserWhereInputInput]" },
    OR: { __type: "[UserWhereInputInput!]" },
    createdAt: { __type: "String" },
    id: { __type: "Number" },
    is: { __type: "Void" },
    isNot: { __type: "Void" },
    name: { __type: "String" },
    password: { __type: "String" },
    updatedAt: { __type: "String" },
    username: { __type: "String" },
  },
  mutation: {
    __typename: { __type: "String!" },
    auth: { __type: "Auth_1!" },
    messages: { __type: "Messages_1!" },
  },
  query: {
    __typename: { __type: "String!" },
    auth: { __type: "Auth!" },
    messages: { __type: "Messages!" },
  },
  subscription: {},
} as const;

export interface Auth {
  __typename?: "Auth";
  me: Me;
}

export interface Auth_1 {
  __typename?: "Auth_1";
  login: (args: {
    password: ScalarsEnums["String"];
    username: ScalarsEnums["String"];
  }) => Register;
  logout?: Maybe<ScalarsEnums["Void"]>;
  register: (args: { data: UserCreateWithoutMessageInputInput }) => Register;
}

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

export interface FindAll {
  __typename?: "FindAll";
  data: Array<FindOne>;
  meta: Meta;
}

export interface FindAll_1 {
  __typename?: "FindAll_1";
  data: Array<DataAndData_1>;
  meta: Meta;
}

export interface FindOne {
  __typename?: "FindOne";
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

export interface FindOne_1AndFindOne_2 {
  __typename?: "FindOne_1AndFindOne_2";
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

export interface Global {
  __typename?: "Global";
  findAll: (args?: {
    page?: Maybe<ScalarsEnums["Number"]>;
    perPage?: Maybe<ScalarsEnums["Number"]>;
  }) => FindAll_1;
  findOne: (args: {
    id: ScalarsEnums["Number"];
  }) => Maybe<FindOne_1AndFindOne_2>;
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

export interface Messages {
  __typename?: "Messages";
  global: Global;
  mine: Mine;
}

export interface Messages_1 {
  __typename?: "Messages_1";
  create: (args: { data: MessageCreateWithoutCreatorInputInput }) => FindOne;
  delete: (args: { ids: Array<ScalarsEnums["Number"]> }) => BatchPayload;
  update: (args: {
    data: MessageUpdateInputInput;
    id: ScalarsEnums["Number"];
  }) => FindOne;
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

export interface Mine {
  __typename?: "Mine";
  findAll: (args?: {
    page?: Maybe<ScalarsEnums["Number"]>;
    perPage?: Maybe<ScalarsEnums["Number"]>;
  }) => FindAll;
  findOne: (args: { id: ScalarsEnums["Number"] }) => Maybe<FindOne>;
}

export interface Register {
  __typename?: "Register";
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
  auth: Auth_1;
  messages: Messages_1;
}

export interface Query {
  __typename?: "Query";
  auth: Auth;
  messages: Messages;
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
