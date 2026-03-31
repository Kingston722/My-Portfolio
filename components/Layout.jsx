import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TargetCursor from "../components/TargetCursor";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const hideSiteBackground = router.pathname === "/" || router.pathname === "/experience";

  return (
    <main
      className={`page ${
        hideSiteBackground ? "bg-none" : "bg-site"
      } text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Harshvardhan Poredi | Portfolio</title>
        <link rel="icon" type="image/png" href="/mylogo.png" />
        <meta
          name="description"
          content="Harshvardhan Poredi is a Full-stack web developer with 10+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#5bc0be" />
      </Head>

      <TopLeftImg />
      <TargetCursor hideDefaultCursor align="bottom-right" sideOffset={16} />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
