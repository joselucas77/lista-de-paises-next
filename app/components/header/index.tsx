import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.svg"
              alt="logo da aplicação"
              width={48}
              height={48}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Lista de países
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
