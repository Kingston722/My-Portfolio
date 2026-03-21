import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 md:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-4 py-4 md:py-6">
          {/* logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide hover:text-accent transition-colors duration-300"
          >
            Harshvardhan Poredi 
          </Link>
          

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
