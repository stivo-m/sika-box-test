import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const CountryLoader = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <AspectRatio ratio={16 / 9}>
          <Skeleton className="rounded-md h-full md:max-h-40 w-full object-contain" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="w-full flex flex-row justify-between gap-6">
        <div className="flex flex-col">
          <Skeleton className="max-w-md w-48 h-6 bg-slate-200 mb-2" />
          <Skeleton className="max-w-xs w-16 h-3 bg-slate-200" />
        </div>

        <Skeleton className="max-w-xs w-20 h-9 bg-slate-200" />
      </CardContent>
    </Card>
  );
};

export default CountryLoader;
