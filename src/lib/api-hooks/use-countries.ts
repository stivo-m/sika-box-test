import { useQuery } from "@tanstack/react-query";
import { CountriesFilters } from "../types";
import { getCommonHeaders, getServerUrl } from "../utils";

export const useCountries = ({ fields }: CountriesFilters) => {
  const results = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const serverUrl = getServerUrl();
      const endpoint = `${serverUrl}all?fields=${fields.join(",")}`;
      const response = await fetch(endpoint, {
        headers: getCommonHeaders(),
      });

      return await response.json();
    },
  });

  return results;
};
