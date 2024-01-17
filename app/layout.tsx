import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de Países",
  description: "Uma lista de paíse criada com Next 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

{
  /* <nav className="w-full bg-white h-16 flex items-center justify-center">
  <section className="container flex items-center gap-3">
    <Image src="/logo.svg" alt="logo da aplicação" width={48} height={48} />
    <h1 className="font-bold text-2xl">Lista de países</h1>
  </section>
</nav>; */
}
