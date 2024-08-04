import HeaderItem from "@/components/core/header-item";
import CountreisList from "@/components/core/countries-list";
import { ArrowUp } from "lucide-react";

function App() {
  return (
    <main className="bg-white min-h-screen relative">
      <section className=" w-full max-w-7xl mx-auto">
        <HeaderItem />
        <div className="w-full mt-32 md:mt-36">
          <CountreisList />
        </div>
      </section>

      <span
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-10 right-10 border border-slate-200 bg-slate-50 hover:bg-slate-200 text-slate-300 hover:text-slate-600 rounded-full duration-150 ease-in-out transition-all p-2"
      >
        <ArrowUp className="h-6 w-6 md:h-12 md:w-12 " />
      </span>
    </main>
  );
}

export default App;
