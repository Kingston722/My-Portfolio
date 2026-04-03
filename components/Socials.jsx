import Link from "next/link";

import {
  RiLinkedinLine,
  RiInstagramLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshvardhan-poredi-744587329/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/Kingston722",
    Icon: RiGithubLine,
  },
  {
    name: "Gmail",
    link: "mailto:harshvardhanwork01@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 sm:gap-x-4 text-base sm:text-lg shrink-0">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[4px] sm:p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
