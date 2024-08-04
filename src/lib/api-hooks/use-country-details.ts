import { useQuery } from "@tanstack/react-query";
import { getCommonHeaders, getServerUrl } from "../utils";

export const useCountryDetails = (name: string) => {
  const results = useQuery({
    queryKey: [`country:${name}`],
    queryFn: async () => {
      const serverUrl = getServerUrl();
      const endpoint = serverUrl + `name/${name}`;

      const response = await fetch(endpoint, {
        headers: getCommonHeaders(),
      });
      return await response.json();
    },
    enabled: false,
  });

  return results;
};
