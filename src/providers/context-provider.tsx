import { Country } from "@/lib/types";
import { createContext, PropsWithChildren, useState } from "react";

export type CountryContext = {
  countries: Country[];
  searchTerm: string | undefined;
  country: Country | undefined;
  loading: boolean;
  setCountry: (data: Country) => void;
  setCountries: (data: Country[]) => void;
  setLoading: (loading: boolean) => void;
  setSearchTerm: (term: string | undefined) => void;
};

const CountriesContext = createContext<CountryContext>({
  countries: [],
  country: undefined,
  loading: false,
  searchTerm: undefined,
  setCountry: (_: Country) => {},
  setCountries: (_: Country[]) => {},
  setLoading: (_: boolean) => {},
  setSearchTerm: (_: string | undefined) => {},
});

const AppContextProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country | undefined>();
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  return (
    <CountriesContext.Provider
      value={{
        countries,
        country,
        loading,
        searchTerm,
        setCountries,
        setCountry,
        setLoading,
        setSearchTerm,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { AppContextProvider, CountriesContext };
