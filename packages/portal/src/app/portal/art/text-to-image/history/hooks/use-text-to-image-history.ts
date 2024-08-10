import { useQuery } from "@apollo/client";
import { queryTextToImageHistory } from "@/app/portal/art/text-to-image/history/data/queries";
import { TextToImageHistoryQuery } from "@/gql/graphql";

export const useTextToImageHistory = (first: number, after: string) => {
  const { data, loading, error, fetchMore } = useQuery<TextToImageHistoryQuery>(
    queryTextToImageHistory,
    {
      variables: {
        first,
        after,
      },
    },
  );
  return {
    fetchMoreTextToImageHistory: (first: number, after: string) => {
      return fetchMore({
        variables: {
          first,
          after,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const previousEntry = previousResult.textToImageHistory;
          const newProducts = fetchMoreResult.textToImageHistory;
          return {
            textToImageHistory: {
              pageInfo: newProducts.pageInfo,
              edges: [...previousEntry.edges, ...newProducts.edges],
            },
          };
        },
      });
    },
    textToImageHistoryData: data,
    textToImageHistoryError: error,
    textToImageHistoryLoading: loading,
  };
};

export const useFindOneTextToImageItem = (ttihId?: string | null) => {
  const { data, loading, error } = useQuery<TextToImageHistoryQuery>(
    queryTextToImageHistory,
    {
      skip: !ttihId,
      variables: {
        id: ttihId,
      },
    },
  );
  return {
    textToImageHistoryData: data,
    textToImageHistoryError: error,
    textToImageHistoryLoading: loading,
  };
};
