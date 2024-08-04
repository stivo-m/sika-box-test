import CountryDetailsDialog from "@/components/core/country-details-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Country } from "@/lib/types";

type Props = {
  country: Country;
};

const CountryItem = ({ country }: Props) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <AspectRatio
          ratio={16 / 9}
          className="shadow-sm border border-slate-400 rounded-md"
        >
          <img
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt || country.name.official}
            className="rounded-md object-cover  min-w-full h-full items-center justify-center"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="w-full flex flex-row justify-between gap-6">
        <div className="flex flex-col">
          <CardTitle>{country.name.common}</CardTitle>
          <CardDescription>{country.name.official}</CardDescription>
        </div>

        <CountryDetailsDialog asChild country={country}>
          <Button>View Country</Button>
        </CountryDetailsDialog>
      </CardContent>
    </Card>
  );
};

export default CountryItem;
