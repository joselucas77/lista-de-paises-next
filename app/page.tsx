import { useState } from "react";
import { getCountries } from "./API/functions/getInfoApi";
import CountryCard from "./components/country-card";
import Header from "./components/header";
import { Country } from "./API/types/country";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const countries = await getCountries();
  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center">
        <section className="grid grid-cols-1s sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
          {countries.map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              ptName={country.translations.por.common}
              flag={country.flags.svg}
              flagAlt={country.flags.alt}
            />
          ))}
        </section>
      </main>
    </>
  );
}
