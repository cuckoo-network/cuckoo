import {useQuery} from "@apollo/client";
import {queryTextToImageHistory} from "@/app/portal/art/text-to-image/history/data/queries";
import {TextToImageHistoryQuery} from "@/gql/graphql";

export const useTextToImageHistory = () => {
  const {data, loading, error} = useQuery<TextToImageHistoryQuery>(
    queryTextToImageHistory,
    {
      variables: {
        data: {},
      },
    },
  );
  return {
    textToImageHistoryData: data,
    textToImageHistoryError: error,
    textToImageHistoryLoading: loading,
  };
};

export const useFindOneTextToImageItem = (ttihId?: string | null) => {
  const {data, loading, error} = useQuery<TextToImageHistoryQuery>(
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
