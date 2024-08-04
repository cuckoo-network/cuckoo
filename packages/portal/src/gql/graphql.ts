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
  textToImageHistoryItemId?: InputMaybe<Scalars['String']['input']>;
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

export type MinerInfo = {
  __typename?: 'MinerInfo';
  cpuCount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  gpuModels: Scalars['String']['output'];
  location: Scalars['String']['output'];
  ramUsed: Scalars['String']['output'];
  type: Scalars['String']['output'];
  votes: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPhotoMedia: PhotoMedia2;
  createSocialPost: CreateSocialPostResponse;
  createTextToImage: TextToImageHistoryItem;
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  requestAirdrop: Scalars['Boolean']['output'];
  requestTokens: TransferHashes;
  sendTransaction: TransactionResponse;
  setPhotoUploaded: Scalars['Boolean']['output'];
  signUp: SignUpResponse;
  updateAccount: UpdateAccountResponse;
};


export type MutationCreatePhotoMediaArgs = {
  data: PhotoMediaInput2;
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


export type MutationSetPhotoUploadedArgs = {
  id: Scalars['String']['input'];
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

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PhotoMedia = {
  __typename?: 'PhotoMedia';
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type PhotoMedia2 = {
  __typename?: 'PhotoMedia2';
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  postId?: Maybe<Scalars['String']['output']>;
  readUrl: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  textToImageId?: Maybe<Scalars['String']['output']>;
  width: Scalars['Int']['output'];
  writeUrl: Scalars['String']['output'];
};

export type PhotoMediaInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
  sortOrder: Scalars['Float']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type PhotoMediaInput2 = {
  ext?: InputMaybe<Scalars['String']['input']>;
  height: Scalars['Int']['input'];
  sortOrder: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
};

export type PhotoMediaToUpload = {
  __typename?: 'PhotoMediaToUpload';
  id: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<PostEdge>;
  pageInfo: PageInfo;
};

export type PostEdge = {
  __typename?: 'PostEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: SocialPost;
};

export type Query = {
  __typename?: 'Query';
  airdropHistory?: Maybe<Array<AirdropHistoryItem>>;
  airdropStats: AirdropStats;
  /** is the server healthy? */
  health: Scalars['String']['output'];
  miners: Array<MinerInfo>;
  socialPosts: PostConnection;
  textToImageHistory: TextToImageHistoryItemConnection;
  user: User;
  walletAccount: WalletAccountResponse;
};


export type QuerySocialPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryTextToImageHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RequestAirdropInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  type: AirdropType;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  token: Scalars['String']['output'];
};

export type SocialPost = {
  __typename?: 'SocialPost';
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

export type TextToImageHistoryItem = {
  __typename?: 'TextToImageHistoryItem';
  createdAt: Scalars['DateTimeISO']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  negativePrompt: Scalars['String']['output'];
  photoMedia: Array<PhotoMedia2>;
  prompt: Scalars['String']['output'];
  samplingSteps: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type TextToImageHistoryItemConnection = {
  __typename?: 'TextToImageHistoryItemConnection';
  edges: Array<TextToImageHistoryItemEdge>;
  pageInfo: PageInfo;
};

export type TextToImageHistoryItemEdge = {
  __typename?: 'TextToImageHistoryItemEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String']['output'];
  node: TextToImageHistoryItem;
};

export type TextToImageInput = {
  height: Scalars['Int']['input'];
  negativePrompt: Scalars['String']['input'];
  photoMedia: Array<PhotoMediaInput2>;
  prompt: Scalars['String']['input'];
  samplingSteps: Scalars['Int']['input'];
  width: Scalars['Int']['input'];
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

export type SocialPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialPostsQuery = { __typename?: 'Query', socialPosts: { __typename?: 'PostConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean, startCursor?: string | null }, edges: Array<{ __typename?: 'PostEdge', cursor: string, node: { __typename?: 'SocialPost', id: string, userId: string, title?: string | null, description?: string | null, postState: string, contentRating: string, hashtags?: Array<string> | null, likes: number, collects: number, comments: number, liked: boolean, deletedAt?: any | null, createdAt: any, updatedAt: any, photoMedia?: Array<{ __typename?: 'PhotoMedia', id: string, url: string, sortOrder: number, width?: number | null, height?: number | null }> | null, profile: { __typename?: 'UserProfile', name: string, following: boolean, profilePhoto: { __typename?: 'PhotoMedia', id: string, url: string, sortOrder: number, width?: number | null, height?: number | null } } } }> } };

export type CreatePhotoMediaMutationVariables = Exact<{
  data: PhotoMediaInput2;
}>;


export type CreatePhotoMediaMutation = { __typename?: 'Mutation', createPhotoMedia: { __typename?: 'PhotoMedia2', id: string, sortOrder: number, width: number, height: number, readUrl: string, writeUrl: string, postId?: string | null, textToImageId?: string | null } };

export type SetPhotoUploadedMutationVariables = Exact<{
  setPhotoUploadedId: Scalars['String']['input'];
}>;


export type SetPhotoUploadedMutation = { __typename?: 'Mutation', setPhotoUploaded: boolean };

export type CreateTextToImageMutationVariables = Exact<{
  data: TextToImageInput;
}>;


export type CreateTextToImageMutation = { __typename?: 'Mutation', createTextToImage: { __typename?: 'TextToImageHistoryItem', id: string, prompt: string, negativePrompt: string, samplingSteps: number, width: number, height: number, createdAt: any, photoMedia: Array<{ __typename?: 'PhotoMedia2', id: string, sortOrder: number, width: number, height: number, readUrl: string, writeUrl: string, postId?: string | null, textToImageId?: string | null }> } };

export type TextToImageHistoryQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type TextToImageHistoryQuery = { __typename?: 'Query', textToImageHistory: { __typename?: 'TextToImageHistoryItemConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean, startCursor?: string | null }, edges: Array<{ __typename?: 'TextToImageHistoryItemEdge', cursor: string, node: { __typename?: 'TextToImageHistoryItem', id: string, prompt: string, negativePrompt: string, samplingSteps: number, width: number, height: number, createdAt: any, photoMedia: Array<{ __typename?: 'PhotoMedia2', id: string, sortOrder: number, width: number, height: number, readUrl: string, writeUrl: string, postId?: string | null, textToImageId?: string | null }> } }> } };

export type RequestTokensMutationVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type RequestTokensMutation = { __typename?: 'Mutation', requestTokens: { __typename?: 'TransferHashes', erc20TokenTransferHash: string, nativeTokenTransferHash: string } };

export type MinersQueryVariables = Exact<{ [key: string]: never; }>;


export type MinersQuery = { __typename?: 'Query', miners: Array<{ __typename?: 'MinerInfo', type: string, walletAddress: string, votes: string, gpuModels: string, cpuCount: number, ramUsed: string, location: string }> };

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
export const SocialPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SocialPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"socialPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"postState"}},{"kind":"Field","name":{"kind":"Name","value":"contentRating"}},{"kind":"Field","name":{"kind":"Name","value":"photoMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hashtags"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"collects"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"profilePhoto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"following"}}]}},{"kind":"Field","name":{"kind":"Name","value":"liked"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}}]}}]}}]} as unknown as DocumentNode<SocialPostsQuery, SocialPostsQueryVariables>;
export const CreatePhotoMediaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePhotoMedia"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PhotoMediaInput2"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPhotoMedia"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"readUrl"}},{"kind":"Field","name":{"kind":"Name","value":"writeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"textToImageId"}}]}}]}}]} as unknown as DocumentNode<CreatePhotoMediaMutation, CreatePhotoMediaMutationVariables>;
export const SetPhotoUploadedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetPhotoUploaded"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"setPhotoUploadedId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setPhotoUploaded"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"setPhotoUploadedId"}}}]}]}}]} as unknown as DocumentNode<SetPhotoUploadedMutation, SetPhotoUploadedMutationVariables>;
export const CreateTextToImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTextToImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TextToImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTextToImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"negativePrompt"}},{"kind":"Field","name":{"kind":"Name","value":"samplingSteps"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"photoMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"readUrl"}},{"kind":"Field","name":{"kind":"Name","value":"writeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"textToImageId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTextToImageMutation, CreateTextToImageMutationVariables>;
export const TextToImageHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TextToImageHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"textToImageHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"prompt"}},{"kind":"Field","name":{"kind":"Name","value":"negativePrompt"}},{"kind":"Field","name":{"kind":"Name","value":"samplingSteps"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"photoMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sortOrder"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"readUrl"}},{"kind":"Field","name":{"kind":"Name","value":"writeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"textToImageId"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TextToImageHistoryQuery, TextToImageHistoryQueryVariables>;
export const RequestTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"erc20TokenTransferHash"}},{"kind":"Field","name":{"kind":"Name","value":"nativeTokenTransferHash"}}]}}]}}]} as unknown as DocumentNode<RequestTokensMutation, RequestTokensMutationVariables>;
export const MinersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Miners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"miners"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"walletAddress"}},{"kind":"Field","name":{"kind":"Name","value":"votes"}},{"kind":"Field","name":{"kind":"Name","value":"gpuModels"}},{"kind":"Field","name":{"kind":"Name","value":"cpuCount"}},{"kind":"Field","name":{"kind":"Name","value":"ramUsed"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<MinersQuery, MinersQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;