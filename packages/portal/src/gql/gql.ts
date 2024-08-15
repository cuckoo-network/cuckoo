/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation RequestAirdrop($data: RequestAirdropInput!) {\n    requestAirdrop(data: $data)\n  }\n": types.RequestAirdropDocument,
    "\n  mutation UpdateAccount($data: UpdateAccountInput!) {\n    updateAccount(data: $data) {\n      type\n      erc4361Message\n      ok\n    }\n  }\n": types.UpdateAccountDocument,
    "\n  mutation SendTransaction($transaction: TransactionRequest!) {\n    sendTransaction(transaction: $transaction) {\n      hash\n    }\n  }\n": types.SendTransactionDocument,
    "\n  query AirdropStats {\n    airdropStats {\n      recentAirdrops {\n        id\n        type\n        rewards\n        receiptUrl\n      }\n      totalRewards\n    }\n  }\n": types.AirdropStatsDocument,
    "\n  query AirdropHistory {\n    airdropHistory {\n      id\n      type\n      rewards\n      receiptUrl\n      createdAt\n    }\n  }\n": types.AirdropHistoryDocument,
    "\n  query WalletAccount {\n    walletAccount {\n      address\n      balance\n      transactionCount\n    }\n  }\n": types.WalletAccountDocument,
    "\n  mutation CreatePost($data: CreateSocialPostInput!) {\n    createSocialPost(data: $data) {\n      photoMedia {\n        id\n        url\n        sortOrder\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  query SocialPosts($after: String, $first: Float, $id: ID) {\n    socialPosts(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        node {\n          id\n          userId\n          title\n          description\n          postState\n          contentRating\n          photoMedia {\n            id\n            url\n            sortOrder\n            width\n            height\n          }\n          hashtags\n          likes\n          collects\n          comments\n          profile {\n            name\n            profilePhoto {\n              id\n              url\n              sortOrder\n              width\n              height\n            }\n            following\n          }\n          liked\n          deletedAt\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n    }\n  }\n": types.SocialPostsDocument,
    "\n  mutation CreatePhotoMedia($data: PhotoMediaInput2!) {\n    createPhotoMedia(data: $data) {\n      id\n      sortOrder\n      width\n      height\n      readUrl\n      writeUrl\n      postId\n      textToImageId\n    }\n  }\n": types.CreatePhotoMediaDocument,
    "\n  mutation SetPhotoUploaded($setPhotoUploadedId: String!) {\n    setPhotoUploaded(id: $setPhotoUploadedId)\n  }\n": types.SetPhotoUploadedDocument,
    "\n  mutation CreateTextToImage($data: TextToImageInput!) {\n    createTextToImage(data: $data) {\n      id\n      prompt\n      negativePrompt\n      samplingSteps\n      width\n      height\n      createdAt\n      photoMedia {\n        id\n        sortOrder\n        width\n        height\n        readUrl\n        writeUrl\n        postId\n        textToImageId\n      }\n    }\n  }\n": types.CreateTextToImageDocument,
    "\n  query TextToImageHistory($after: String, $first: Float, $id: ID) {\n    textToImageHistory(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          prompt\n          negativePrompt\n          samplingSteps\n          width\n          height\n          createdAt\n          photoMedia {\n            id\n            sortOrder\n            width\n            height\n            readUrl\n            writeUrl\n            postId\n            textToImageId\n          }\n        }\n      }\n    }\n  }\n": types.TextToImageHistoryDocument,
    "\n  mutation RequestTokens($address: String!) {\n    requestTokens(address: $address) {\n      erc20TokenTransferHash\n      nativeTokenTransferHash\n    }\n  }\n": types.RequestTokensDocument,
    "\n  query Miners {\n    miners {\n      type\n      walletAddress\n      votes\n      gpuModels\n      cpuCount\n      ramUsed\n      location\n    }\n  }\n": types.MinersDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  query User {\n    user {\n      id\n      email\n      name\n      isAdmin\n      username\n    }\n  }\n": types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestAirdrop($data: RequestAirdropInput!) {\n    requestAirdrop(data: $data)\n  }\n"): (typeof documents)["\n  mutation RequestAirdrop($data: RequestAirdropInput!) {\n    requestAirdrop(data: $data)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAccount($data: UpdateAccountInput!) {\n    updateAccount(data: $data) {\n      type\n      erc4361Message\n      ok\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAccount($data: UpdateAccountInput!) {\n    updateAccount(data: $data) {\n      type\n      erc4361Message\n      ok\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendTransaction($transaction: TransactionRequest!) {\n    sendTransaction(transaction: $transaction) {\n      hash\n    }\n  }\n"): (typeof documents)["\n  mutation SendTransaction($transaction: TransactionRequest!) {\n    sendTransaction(transaction: $transaction) {\n      hash\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AirdropStats {\n    airdropStats {\n      recentAirdrops {\n        id\n        type\n        rewards\n        receiptUrl\n      }\n      totalRewards\n    }\n  }\n"): (typeof documents)["\n  query AirdropStats {\n    airdropStats {\n      recentAirdrops {\n        id\n        type\n        rewards\n        receiptUrl\n      }\n      totalRewards\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AirdropHistory {\n    airdropHistory {\n      id\n      type\n      rewards\n      receiptUrl\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query AirdropHistory {\n    airdropHistory {\n      id\n      type\n      rewards\n      receiptUrl\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query WalletAccount {\n    walletAccount {\n      address\n      balance\n      transactionCount\n    }\n  }\n"): (typeof documents)["\n  query WalletAccount {\n    walletAccount {\n      address\n      balance\n      transactionCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost($data: CreateSocialPostInput!) {\n    createSocialPost(data: $data) {\n      photoMedia {\n        id\n        url\n        sortOrder\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($data: CreateSocialPostInput!) {\n    createSocialPost(data: $data) {\n      photoMedia {\n        id\n        url\n        sortOrder\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SocialPosts($after: String, $first: Float, $id: ID) {\n    socialPosts(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        node {\n          id\n          userId\n          title\n          description\n          postState\n          contentRating\n          photoMedia {\n            id\n            url\n            sortOrder\n            width\n            height\n          }\n          hashtags\n          likes\n          collects\n          comments\n          profile {\n            name\n            profilePhoto {\n              id\n              url\n              sortOrder\n              width\n              height\n            }\n            following\n          }\n          liked\n          deletedAt\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n    }\n  }\n"): (typeof documents)["\n  query SocialPosts($after: String, $first: Float, $id: ID) {\n    socialPosts(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        node {\n          id\n          userId\n          title\n          description\n          postState\n          contentRating\n          photoMedia {\n            id\n            url\n            sortOrder\n            width\n            height\n          }\n          hashtags\n          likes\n          collects\n          comments\n          profile {\n            name\n            profilePhoto {\n              id\n              url\n              sortOrder\n              width\n              height\n            }\n            following\n          }\n          liked\n          deletedAt\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePhotoMedia($data: PhotoMediaInput2!) {\n    createPhotoMedia(data: $data) {\n      id\n      sortOrder\n      width\n      height\n      readUrl\n      writeUrl\n      postId\n      textToImageId\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePhotoMedia($data: PhotoMediaInput2!) {\n    createPhotoMedia(data: $data) {\n      id\n      sortOrder\n      width\n      height\n      readUrl\n      writeUrl\n      postId\n      textToImageId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetPhotoUploaded($setPhotoUploadedId: String!) {\n    setPhotoUploaded(id: $setPhotoUploadedId)\n  }\n"): (typeof documents)["\n  mutation SetPhotoUploaded($setPhotoUploadedId: String!) {\n    setPhotoUploaded(id: $setPhotoUploadedId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTextToImage($data: TextToImageInput!) {\n    createTextToImage(data: $data) {\n      id\n      prompt\n      negativePrompt\n      samplingSteps\n      width\n      height\n      createdAt\n      photoMedia {\n        id\n        sortOrder\n        width\n        height\n        readUrl\n        writeUrl\n        postId\n        textToImageId\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTextToImage($data: TextToImageInput!) {\n    createTextToImage(data: $data) {\n      id\n      prompt\n      negativePrompt\n      samplingSteps\n      width\n      height\n      createdAt\n      photoMedia {\n        id\n        sortOrder\n        width\n        height\n        readUrl\n        writeUrl\n        postId\n        textToImageId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query TextToImageHistory($after: String, $first: Float, $id: ID) {\n    textToImageHistory(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          prompt\n          negativePrompt\n          samplingSteps\n          width\n          height\n          createdAt\n          photoMedia {\n            id\n            sortOrder\n            width\n            height\n            readUrl\n            writeUrl\n            postId\n            textToImageId\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query TextToImageHistory($after: String, $first: Float, $id: ID) {\n    textToImageHistory(after: $after, first: $first, id: $id) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n      edges {\n        cursor\n        node {\n          id\n          prompt\n          negativePrompt\n          samplingSteps\n          width\n          height\n          createdAt\n          photoMedia {\n            id\n            sortOrder\n            width\n            height\n            readUrl\n            writeUrl\n            postId\n            textToImageId\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestTokens($address: String!) {\n    requestTokens(address: $address) {\n      erc20TokenTransferHash\n      nativeTokenTransferHash\n    }\n  }\n"): (typeof documents)["\n  mutation RequestTokens($address: String!) {\n    requestTokens(address: $address) {\n      erc20TokenTransferHash\n      nativeTokenTransferHash\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Miners {\n    miners {\n      type\n      walletAddress\n      votes\n      gpuModels\n      cpuCount\n      ramUsed\n      location\n    }\n  }\n"): (typeof documents)["\n  query Miners {\n    miners {\n      type\n      walletAddress\n      votes\n      gpuModels\n      cpuCount\n      ramUsed\n      location\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    user {\n      id\n      email\n      name\n      isAdmin\n      username\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      id\n      email\n      name\n      isAdmin\n      username\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;