import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
  HiBriefcase,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "experience", path: "/experience", Icon: HiBriefcase },
  { name: "projects", path: "/work", Icon: HiViewColumns },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 mt-auto flex w-full flex-col items-center gap-y-4 xl:top-0 xl:bottom-0 xl:left-auto xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen xl:justify-center">
      <div className="flex h-[68px] w-full items-center justify-between bg-white/10 px-5 text-2xl backdrop-blur-sm sm:h-[74px] sm:px-8 sm:text-3xl md:px-16 lg:px-24 xl:h-max xl:flex-col xl:justify-center xl:gap-y-10 xl:rounded-full xl:px-0 xl:py-8 xl:text-xl">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
