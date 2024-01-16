import Link from "next/link";
import Image from "next/image";
import {
  getCountryByName,
  getCountryBorderByName,
} from "../../API/functions/getInfoApi";
import CountryCard from "../../components/country-card";

export default async function Country({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getCountryByName(decodeURI(name));
  const borderCountries = await getCountryBorderByName(decodeURI(name));

  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl font-bold text-center text-gray-800 my-16">
        {country.translations.por.common}
      </h1>
      <Link href="/" className="flex items-center py-2">
        <Image
          src="/arrow-back.svg"
          alt="ícone de seta voltar"
          width={24}
          height={24}
        />
        Voltar
      </Link>
      <article className="flex md:flex-row flex-col justify-between min-full p-10 bg-white rounded-xl">
        <section>
          {country.capital && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>🏙️ Capital:</b> {country.capital}
            </h2>
          )}
          <h2 className="text-xl text-gray-800 mt-3">
            <b>🗺️ Continente:</b> {country.region}{" "}
            {country.subregion && `- ${country.subregion}`}
          </h2>
          <h2 className="text-xl text-gray-800 mt-3">
            <b>👨‍👩‍👧‍👦 Populaçao:</b> {formatter.format(country.population)}
          </h2>
          {country.languages && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>🗣️ Linguas faladas:</b>
              <br />
              {Object.values(country.languages).map((language) => (
                <span
                  key={language}
                  className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </section>
        <div className="relative h-48 my-2 md:h-auto w-96 shadow-md md:order-last order-first">
          <Image
            src={country.flags.svg}
            alt="Bandeira do país"
            fill
            className="object-cover"
          />
        </div>
      </article>
      <section>
        <h3 className="mt-12 text-2xl font-semibold text-gray-800">
          Países que fazem fronteira
        </h3>
        <div className="grid grid-cols-1s sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-3">
          {borderCountries?.map((border) => (
            <CountryCard key={border.name} {...border} />
          ))}
        </div>
      </section>
    </section>
  );
}
