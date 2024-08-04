export type CountryName = {
  common: string;
  official: string;
};

export type CountryFlag = {
  png: string;
  svg: string;
  alt: string;
};

export type Currency = {
  name: string;
  symbol: string;
};

export type Country = {
  flags: CountryFlag;
  name: CountryName;
  currencies?: Record<string, Currency>;
  capital?: string[];
  languages?: Record<string, string>;
  population?: number;
};

export type CountriesFilters = {
  fields: string[];
};
