import { PropsWithChildren, useEffect, useRef } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useCountryDetails } from "@/lib/api-hooks/use-country-details";
import { Country } from "@/lib/types";

interface Props extends PropsWithChildren {
  asChild?: boolean;
  country: Country;
}

const CountryDetailsDialog = ({ country, children, asChild }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const {
    data: updatedCountry,
    isLoading,
    refetch: fetchCountryData,
  } = useCountryDetails(country.name.common);

  useEffect(() => {
    ref.current?.addEventListener("click", () => {
      if (!isLoading) {
        fetchCountryData();
      }
    });
  }, [ref.current]);

  const data =
    updatedCountry == undefined
      ? country
      : ({ ...country, ...updatedCountry[0] } as Country);

  const capitalCity =
    data == undefined || data.capital == undefined || data.capital.length == 0
      ? "Unknown"
      : data.capital[0];

  const languages =
    data == undefined || data.languages == undefined
      ? "Unknown"
      : Object.values(data.languages).join(", ");

  const currencies =
    data == undefined || data.currencies == undefined
      ? "Unknown"
      : Object.values(data.currencies)
          .map((currency) => {
            return `(${currency.symbol}) ${currency.name}`;
          })
          .join(", ");

  const timezones =
    data == undefined || data.timezones == undefined
      ? "Unknown"
      : data.timezones.join(", ");

  return (
    <Dialog>
      <DialogTrigger ref={ref} asChild={asChild}>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="w-full">
            <AspectRatio ratio={16 / 9} className="w-full mt-5">
              <img
                src={data.flags.svg || data.flags.png}
                alt={data.flags.alt || data.name.official}
                className="object-cover shadow-sm border border-slate-400 rounded-md  min-w-full h-full items-center justify-center"
              />
            </AspectRatio>
          </div>

          <DialogTitle className="text-xl pt-6 md:text-2xl">
            {data.name.official}
          </DialogTitle>
          {isLoading && <DialogDescription>Loading...</DialogDescription>}
          {!isLoading && (
            <DialogDescription className="text-base w-full gap-4 flex justify-center flex-col divide-y">
              <span className="pt-2">
                Official Name:{" "}
                <span className="font-bold">{data.name.official}</span>
              </span>

              <span className="pt-2">
                Common Name:{" "}
                <span className="font-bold">{data.name.common}</span>
              </span>
              <span>
                Capital City: <span className="font-bold">{capitalCity}</span>
              </span>
              <span className="pt-2">
                Population:{" "}
                <span className="font-bold">
                  {data.population?.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </span>

              <span className="pt-2">
                Languages: <span className="font-bold">{languages}</span>
              </span>

              <span className="pt-2">
                Currencies: <span className="font-bold">{currencies}</span>
              </span>

              <span className="pt-2">
                Timezones: <span className="font-bold">{timezones}</span>
              </span>
            </DialogDescription>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CountryDetailsDialog;
