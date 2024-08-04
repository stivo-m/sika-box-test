import { useContext } from "react";
import { CountriesContext } from "@/providers/context-provider";
import { Input } from "@/components/ui/input";

const HeaderItem = () => {
  const { searchTerm, setSearchTerm } = useContext(CountriesContext);

  return (
    <div className="w-full bg-white h-28 flex items-center justify-center shadow-md fixed top-0 max-w-7xl mx-auto z-50">
      <header className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <h4 className="font-bold text-lg md:text-xl lg:text-2xl">
          List of all countries
        </h4>

        <Input
          className="w-full md:max-w-md lg:max-w-lg"
          placeholder="Search for a country..."
          value={searchTerm || ""}
          onChange={(v) => setSearchTerm(v.target.value)}
        />
      </header>
    </div>
  );
};

export default HeaderItem;
