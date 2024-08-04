import { useQuery } from "@tanstack/react-query";
import { CountriesFilters } from "../types";
import { getCommonHeaders, getServerUrl } from "../utils";

export const useCountries = async ({
  fields = ["name", ""],
}: CountriesFilters) => {
  const results = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const serverUrl = getServerUrl();
      const endpoint = `${serverUrl}?fields=${fields.join(",")}`;
      return await fetch(endpoint, {
        headers: getCommonHeaders(),
      });
    },
  });

  return results;
};
