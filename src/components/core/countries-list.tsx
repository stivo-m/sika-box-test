import { useContext, useEffect } from "react";

import { CountriesContext } from "@/providers/context-provider";
import CountryItem from "@/components/core/country-item";
import CountryLoader from "./country-loader";
import { useCountries } from "@/lib/api-hooks/use-countries";
import { Country } from "@/lib/types";
import { matchesAny } from "@/lib/utils";
import { Button } from "../ui/button";

const CountreisList = () => {
  const {
    data,
    isPending,
    refetch: fetchCountries,
  } = useCountries({ fields: ["name", "flags"] });
  const { loading, searchTerm, countries, setCountries, setSearchTerm } =
    useContext(CountriesContext);

  useEffect(() => {
    if (data != undefined) {
      setCountries(data);
      setSearchTerm(undefined);
    }
  }, [data]);

  const hasLoading = loading || isPending;
  const hasSearchTerm = searchTerm != undefined && searchTerm != "";
  const filteredCountries = !hasSearchTerm
    ? countries
    : countries.filter((country: Country) => {
        return matchesAny(searchTerm, [
          country.name.common,
          country.name.official,
        ]);
      });

  if (hasLoading) {
    return (
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 my-10">
        {Array.from({ length: 10 }).map((_, idx) => {
          return <CountryLoader key={idx} />;
        })}
      </section>
    );
  }

  if (hasSearchTerm && filteredCountries.length == 0) {
    return (
      <div className="w-full flex flex-row items-center justify-center">
        <section className="w-full flex flex-col p-10 bg-white shadow-md mt-10 max-w-sm place-self-center">
          <h5 className="text-lg font-bold text-center">
            Did you type it right?
          </h5>
          <p className="text-base text-center mb-4">
            It seems we did not find any country as per your search.
          </p>
          <Button onClick={() => setSearchTerm(undefined)}>Clear search</Button>
        </section>
      </div>
    );
  }

  if (!hasSearchTerm && filteredCountries.length == 0) {
    return (
      <div className="w-full flex flex-row items-center justify-center">
        <section className="w-full flex flex-col p-10 bg-white shadow-md mt-10 max-w-sm place-self-center">
          <h5 className="text-lg font-bold text-center">
            Something seems wrong
          </h5>
          <p className="text-base text-center mb-4">
            We cannot find any countries at the moment.
          </p>
          <Button onClick={() => fetchCountries()}>Reload</Button>
        </section>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 my-10">
      {!hasLoading &&
        filteredCountries.map((country) => {
          return <CountryItem key={country.name.common} country={country} />;
        })}
    </section>
  );
};

export default CountreisList;
