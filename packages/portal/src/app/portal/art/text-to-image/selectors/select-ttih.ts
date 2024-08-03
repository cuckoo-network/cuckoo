import {
  CreatedTextToImageHistoryItem,
  TextToImageHistoryQuery,
} from "@/gql/graphql";

export function selectTtih(
  textToImageHistoryData: TextToImageHistoryQuery | undefined,
): CreatedTextToImageHistoryItem | undefined {
  return textToImageHistoryData?.textToImageHistory?.at(0);
}
