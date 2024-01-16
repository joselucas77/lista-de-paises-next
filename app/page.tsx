import { getCountries } from "./API/functions/getInfoApi";
import CountryCard from "./components/country-card";

export default async function Home() {
  const countries = await getCountries();
  return (
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
  );
}
