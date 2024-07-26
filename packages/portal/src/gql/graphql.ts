/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
};

/** The type of address to be linked */
export enum AddressType {
  MinerWalletAddress = 'MINER_WALLET_ADDRESS',
  StakerWalletAddress = 'STAKER_WALLET_ADDRESS'
}

export type AirdropHistoryItem = {
  __typename?: 'AirdropHistoryItem';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  receiptUrl?: Maybe<Scalars['String']['output']>;
  rewards: Scalars['String']['output'];
  type: AirdropType;
};

export type AirdropStats = {
  __typename?: 'AirdropStats';
  recentAirdrops: Array<AirdropHistoryItem>;
  totalRewards: Scalars['Float']['output'];
};

/** The type of airdrop action */
export enum AirdropType {
  AddEmail = 'ADD_EMAIL',
  Create_1StImage = 'CREATE_1ST_IMAGE',
  DailyClaim = 'DAILY_CLAIM',
  FollowX = 'FOLLOW_X',
  JoinDiscord = 'JOIN_DISCORD',
  JoinTelegram = 'JOIN_TELEGRAM',
  Login = 'LOGIN',
  MineFirstGpu = 'MINE_FIRST_GPU',
  Refer = 'REFER',
  StakeCai = 'STAKE_CAI'
}

export type CreateSocialPostInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hashtags?: InputMaybe<Array<Scalars['String']['input']>>;
  nsfw?: InputMaybe<Scalars['Boolean']['input']>;
  photoMedia: Array<PhotoMediaInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSocialPostResponse = {
  __typename?: 'CreateSocialPostResponse';
  photoMedia?: Maybe<Array<PhotoMediaToUpload>>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSocialPost: CreateSocialPostResponse;
  createTextToImage: TextToImageRequest;
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  requestAirdrop: Scalars['Boolean']['output'];
  requestTokens: TransferHashes;
  sendTransaction: TransactionResponse;
  signUp: SignUpResponse;
  updateAccount: UpdateAccountResponse;
};


export type MutationCreateSocialPostArgs = {
  data: CreateSocialPostInput;
};


export type MutationCreateTextToImageArgs = {
  data: TextToImageInput;
};


export type MutationLoginArgs = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};


export type MutationRequestAirdropArgs = {
  data: RequestAirdropInput;
};


export type MutationRequestTokensArgs = {
  address: Scalars['String']['input'];
};


export type MutationSendTransactionArgs = {
  transaction: TransactionRequest;
};


export type MutationSignUpArgs = {
  email: Scalars['EmailAddress']['input'];
  name: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateAccountArgs = {
  data: UpdateAccountInput;
};

export type OutputImage = {
  __typename?: 'OutputImage';
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nsfw?: Maybe<Scalars['Boolean']['output']>;
  origUrl: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type OutputImageInput = {
  height: Scalars['Int']['input'];
  nsfw?: InputMaybe<Scalars['Boolean']['input']>;
  origUrl: Scalars['String']['input'];
  url: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};

export type OverrideSettings = {
  __typename?: 'OverrideSettings';
  clipSkip: Scalars['Int']['output'];
  ensd: Scalars['Int']['output'];
  sdVae: Scalars['String']['output'];
};

export type OverrideSettingsInput = {
  clipSkip: Scalars['Int']['input'];
  ensd: Scalars['Int']['input'];
  sdVae: Scalars['String']['input'];
};

export type Page = {
  __typename?: 'Page';
  current: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
  totalResults: Scalars['Int']['output'];
};

export type PhotoMedia = {
  __typename?: 'PhotoMedia';
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type PhotoMediaInput = {
  id: Scalars['String']['input'];
  sortOrder: Scalars['Float']['input'];
};

export type PhotoMediaToUpload = {
  __typename?: 'PhotoMediaToUpload';
  id: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  collects: Scalars['Float']['output'];
  comments: Scalars['Float']['output'];
  contentRating: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deletedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hashtags?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  liked: Scalars['Boolean']['output'];
  likes: Scalars['Float']['output'];
  photoMedia?: Maybe<Array<PhotoMedia>>;
  postState: Scalars['String']['output'];
  profile: UserProfile;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['String']['output'];
};

export type PostsResponse = {
  __typename?: 'PostsResponse';
  page: Page;
  posts: Array<Post>;
};

export type Query = {
  __typename?: 'Query';
  airdropHistory?: Maybe<Array<AirdropHistoryItem>>;
  airdropStats: AirdropStats;
  createBlob: Array<TextToImageRequest>;
  /** is the server healthy? */
  health: Scalars['String']['output'];
  textToImageHistory: Array<TextToImageRequest>;
  trendingPosts: PostsResponse;
  user: User;
  walletAccount: WalletAccountResponse;
};


export type QueryCreateBlobArgs = {
  data?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTextToImageHistoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTrendingPostsArgs = {
  page?: Scalars['Int']['input'];
};

export type RequestAirdropInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  type: AirdropType;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  token: Scalars['String']['output'];
};

export type TextToImageInput = {
  batchSize: Scalars['Int']['input'];
  cfgScale: Scalars['Float']['input'];
  deleted: Scalars['Boolean']['input'];
  enableHr: Scalars['Boolean']['input'];
  height: Scalars['Int']['input'];
  isRandomSeed: Scalars['Boolean']['input'];
  model: Scalars['String']['input'];
  modelDisplayName: Scalars['String']['input'];
  modelUuid: Scalars['String']['input'];
  modelVersionUuid: Scalars['String']['input'];
  negativePrompt: Scalars['String']['input'];
  outputImageUrl: Scalars['String']['input'];
  outputImages: Array<OutputImageInput>;
  overrideSettings: OverrideSettingsInput;
  priority: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
  requestType: Scalars['String']['input'];
  samplingMethod: Scalars['String']['input'];
  samplingSteps: Scalars['Int']['input'];
  seed: Scalars['Float']['input'];
  state: Scalars['String']['input'];
  width: Scalars['Int']['input'];
};

export type TextToImageRequest = {
  __typename?: 'TextToImageRequest';
  batchSize: Scalars['Int']['output'];
  cfgScale: Scalars['Float']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  deleted: Scalars['Boolean']['output'];
  enableHr: Scalars['Boolean']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isRandomSeed: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  model: Scalars['String']['output'];
  modelDisplayName: Scalars['String']['output'];
  modelUuid: Scalars['String']['output'];
  modelVersionUuid: Scalars['String']['output'];
  negativePrompt: Scalars['String']['output'];
  outputImageUrl: Scalars['String']['output'];
  outputImages: Array<OutputImage>;
  overrideSettings: OverrideSettings;
  priority: Scalars['String']['output'];
  prompt: Scalars['String']['output'];
  requestType: Scalars['String']['output'];
  samplingMethod: Scalars['String']['output'];
  samplingSteps: Scalars['Int']['output'];
  seed: Scalars['Float']['output'];
  seenAt?: Maybe<Scalars['DateTimeISO']['output']>;
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  width: Scalars['Int']['output'];
};

export type TransactionRequest = {
  nonce?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionResponse = {
  __typename?: 'TransactionResponse';
  hash?: Maybe<Scalars['String']['output']>;
};

export type TransferHashes = {
  __typename?: 'TransferHashes';
  erc20TokenTransferHash: Scalars['String']['output'];
  nativeTokenTransferHash: Scalars['String']['output'];
};

export type UpdateAccountInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  addressType?: InputMaybe<AddressType>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailOtp?: InputMaybe<Scalars['String']['input']>;
  erc4361Message?: InputMaybe<Scalars['String']['input']>;
  referrerUsername?: InputMaybe<Scalars['String']['input']>;
  signature?: InputMaybe<Scalars['String']['input']>;
  type: UpdateAccountType;
};

export type UpdateAccountResponse = {
  __typename?: 'UpdateAccountResponse';
  erc4361Message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  type: UpdateAccountType;
};

/** The type of account linking request */
export enum UpdateAccountType {
  EmailSendOtp = 'EMAIL_SEND_OTP',
  EmailVerifyOtp = 'EMAIL_VERIFY_OTP',
  Erc4361GetMessage = 'ERC4361_GET_MESSAGE',
  Erc4361VerifySig = 'ERC4361_VERIFY_SIG',
  RefererUsername = 'REFERER_USERNAME'
}

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  following: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  profilePhoto: PhotoMedia;
};

export type WalletAccountResponse = {
  __typename?: 'WalletAccountResponse';
  address: Scalars['String']['output'];
  balance: Scalars['String']['output'];
  transactionCount: Scalars['Int']['output'];
};

export type RequestAirdropMutationVariables = Exact<{
  data: RequestAirdropInput;
}>;


export type RequestAirdropMutation = { __typename?: 'Mutation', requestAirdrop: boolean };

export type UpdateAccountMutationVariables = Exact<{
  data: UpdateAccountInput;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', updateAccount: { __typename?: 'UpdateAccountResponse', type: UpdateAccountType, erc4361Message?: string | null, ok?: boolean | null } };

export type SendTransactionMutationVariables = Exact<{
  transaction: TransactionRequest;
}>;


export type SendTransactionMutation = { __typename?: 'Mutation', sendTransaction: { __typename?: 'TransactionResponse', hash?: string | null } };

export type AirdropStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type AirdropStatsQuery = { __typename?: 'Query', airdropStats: { __typename?: 'AirdropStats', totalRewards: number, recentAirdrops: Array<{ __typename?: 'AirdropHistoryItem', id: string, type: AirdropType, rewards: string, receiptUrl?: string | null }> } };

export type AirdropHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AirdropHistoryQuery = { __typename?: 'Query', airdropHistory?: Array<{ __typename?: 'AirdropHistoryItem', id: string, type: AirdropType, rewards: string, receiptUrl?: string | null, createdAt?: any | null }> | null };

export type WalletAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type WalletAccountQuery = { __typename?: 'Query', walletAccount: { __typename?: 'WalletAccountResponse', address: string, balance: string, transactionCount: number } };

export type CreatePostMutationVariables = Exact<{
  data: CreateSocialPostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createSocialPost: { __typename?: 'CreateSocialPostResponse', photoMedia?: Array<{ __typename?: 'PhotoMediaToUpload', id: string, url: string, sortOrder: number }> | null } };

export type TrendingPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrendingPostsQuery = { __typename?: 'Query', trendingPosts: { __typename?: 'PostsResponse', posts: Array<{ __typename?: 'Post', id: string, userId: string, title?: string | null, description?: string | null, postState: string, contentRating: string, hashtags?: Array<string> | null, likes: number, collects: number, comments: number, liked: boolean, deletedAt?: any | null, createdAt: any, updatedAt: any, photoMedia?: Array<{ __typename?: 'PhotoMedia', id: string, url: string, sortOrder: number, width: number, height: number }> | null, profile: { __typename?: 'UserProfile', name: string, following: boolean, profilePhoto: { __typename?: 'PhotoMedia', id: string, url: string, sortOrder: number, width: number, height: number } } }> } };

export type CreateTextToImageMutationVariables = Exact<{
  data: TextToImageInput;
}>;


export type CreateTextToImageMutation = { __typename?: 'Mutation', createTextToImage: { __typename?: 'TextToImageRequest', id: string, model: string, modelVersionUuid: string, modelUuid: string, modelDisplayName: string, prompt: string, negativePrompt: string, state: string, deleted: boolean, samplingSteps: number, samplingMethod: string, width: number, height: number, cfgScale: number, seed: number, isRandomSeed: boolean, outputImageUrl: string, message?: string | null, seenAt?: any | null, priority: string, createdAt: any, updatedAt: any, batchSize: number, requestType: string, enableHr: boolean, outputImages: Array<{ __typename?: 'OutputImage', id: string, url: string, width: number, height: number, origUrl: string, nsfw?: boolean | null }>, overrideSettings: { __typename?: 'OverrideSettings', sdVae: string, clipSkip: number, ensd: number } } };

export type RequestTokensMutationVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type RequestTokensMutation = { __typename?: 'Mutation', requestTokens: { __typename?: 'TransferHashes', erc20TokenTransferHash: string, nativeTokenTransferHash: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email?: string | null, name?: string | null, isAdmin?: boolean | null, username?: string | null } };


export const RequestAirdropDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestAirdrop"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestAirdropInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestAirdrop"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<RequestAirdropMutation, RequestAirdropMutationVariables>;
export const UpdateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAccountInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"erc4361Message"}},{"kind":"Field","name":{"kind":"Name","value":"ok"}}]}}]}}]} as unknown as DocumentNode<UpdateAccountMutation, UpdateAccountMutationVariables>;
export const SendTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transaction"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transaction"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transaction"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}}]}}]}}]} as unknown as DocumentNode<SendTransactionMutation, SendTransactionMutationVariables>;
export const AirdropStatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AirdropStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airdropStats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentAirdrops"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"rewards"}},{"kind":"Field","name":{"kind":"Name","value":"receiptUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalRewards"}}]}}]}}]} as unknown as DocumentNode<AirdropStatsQuery, AirdropStatsQueryVariables>;
export const AirdropHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AirdropHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airdropHistory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"rewards"}},{"kind":"Field","name":{"kind":"Name","value":"receiptUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<AirdropHistoryQuery, AirdropHistoryQueryVariables>;
export const WalletAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WalletAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"walletAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transactionCount"}}]}}]}}]} as unknown as DocumentNode<WalletAccountQuery, WalletAccountQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSocialPostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSocialPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const TrendingPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TrendingPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trendingPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"postState"}},{"kind":"Field","name":{"kind":"Name","value":"contentRating"}},{"kind":"Field","name":{"kind":"Name","value":"photoMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"collects"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liked"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<TrendingPostsQuery, TrendingPostsQueryVariables>;
export const CreateTextToImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTextToImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TextToImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTextToImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"modelVersionUuid"}},{"kind":"Field","name":{"kind":"Name","value":"modelUuid"}},{"kind":"Field","name":{"kind":"Name","value":"modelDisplayName"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"negativePrompt"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"deleted"}},{"kind":"Field","name":{"kind":"Name","value":"samplingSteps"}},{"kind":"Field","name":{"kind":"Name","value":"samplingMethod"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"cfgScale"}},{"kind":"Field","name":{"kind":"Name","value":"seed"}},{"kind":"Field","name":{"kind":"Name","value":"isRandomSeed"}},{"kind":"Field","name":{"kind":"Name","value":"outputImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"outputImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"origUrl"}},{"kind":"Field","name":{"kind":"Name","value":"nsfw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"seenAt"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"batchSize"}},{"kind":"Field","name":{"kind":"Name","value":"requestType"}},{"kind":"Field","name":{"kind":"Name","value":"enableHr"}},{"kind":"Field","name":{"kind":"Name","value":"overrideSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sdVae"}},{"kind":"Field","name":{"kind":"Name","value":"clipSkip"}},{"kind":"Field","name":{"kind":"Name","value":"ensd"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTextToImageMutation, CreateTextToImageMutationVariables>;
export const RequestTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"erc20TokenTransferHash"}},{"kind":"Field","name":{"kind":"Name","value":"nativeTokenTransferHash"}}]}}]}}]} as unknown as DocumentNode<RequestTokensMutation, RequestTokensMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;