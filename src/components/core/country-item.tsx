import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { Country } from "@/lib/types";

type Props = {
  country: Country;
};

const CountryItem = ({ country }: Props) => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <img
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt || country.name.official}
            className="rounded-md h-full md:max-h-40 w-full object-contain"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="w-full flex flex-row justify-between gap-6">
        <div className="flex flex-col">
          <CardTitle>{country.name.common}</CardTitle>
          <CardDescription>{country.name.official}</CardDescription>
        </div>

        <Button>View Country</Button>
      </CardContent>
    </Card>
  );
};

export default CountryItem;
