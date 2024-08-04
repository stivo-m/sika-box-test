"use client";

import HeaderItem from "@/components/core/header-item";
import CountreisList from "@/components/core/countries-list";

function App() {
  return (
    <main className="bg-slate-100 min-h-screen">
      <section className=" w-full max-w-7xl mx-auto">
        <HeaderItem />
        <CountreisList />
      </section>
    </main>
  );
}

export default App;
