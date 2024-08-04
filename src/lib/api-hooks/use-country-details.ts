import { useQuery } from "@tanstack/react-query";
import { getCommonHeaders, getServerUrl } from "../utils";

export const useCountryDetails = async (name: string) => {
  const results = useQuery({
    queryKey: [`country:${name}`],
    queryFn: async () => {
      const serverUrl = getServerUrl();
      const endpoint = serverUrl + `name/${name}`;

      return await fetch(endpoint, {
        headers: getCommonHeaders(),
      });
    },
  });

  return results;
};
