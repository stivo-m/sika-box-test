import { Country } from "@/lib/types";
import { createContext, PropsWithChildren, useState } from "react";

export type CountryContext = {
  countries: Country[];
  searchTerm: string | undefined;
  setCountries: (data: Country[]) => void;
  setSearchTerm: (term: string | undefined) => void;
};

const CountriesContext = createContext<CountryContext>({
  countries: [],
  searchTerm: undefined,
  setCountries: (_: Country[]) => {},
  setSearchTerm: (_: string | undefined) => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  return (
    <CountriesContext.Provider
      value={{
        countries,
        searchTerm,
        setCountries,
        setSearchTerm,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { AppContextProvider, CountriesContext };
