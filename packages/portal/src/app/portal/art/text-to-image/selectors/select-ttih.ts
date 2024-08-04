import { TextToImageHistoryItem, TextToImageHistoryQuery } from "@/gql/graphql";

export function selectTtih(
  textToImageHistoryData: TextToImageHistoryQuery | undefined,
): TextToImageHistoryItem | undefined {
  return textToImageHistoryData?.textToImageHistory?.edges.at(0)?.node;
}
