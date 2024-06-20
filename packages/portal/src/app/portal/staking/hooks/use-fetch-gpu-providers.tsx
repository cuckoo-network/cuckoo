import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchGPUProviders = () => {
  const [providers, setProviders] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Begin loading
      setError(null); // Reset error state

      try {
        const response = await axios.post(
          "https://api.blockeden.xyz/cuckoo/mainnet/ai/e1CNojhFfpSMrGrgcafg/#listGPUProviders",
          {
            jsonrpc: "2.0",
            method: "listGPUProviders",
            id: 1,
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setProviders(response.data.result); // Update providers with response data
      } catch (error: any) {
        setError(error); // Set error state on failure
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false); // End loading whether request succeeded or failed
      }
    };

    fetchData();
  }, []);

  return { providers, isLoading, error };
};
