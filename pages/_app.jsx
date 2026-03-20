import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import InitialLoader from "../components/InitialLoader";
import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderSeenKey = "hp-initial-loader-seen";
    const hasSeenLoader = window.sessionStorage.getItem(loaderSeenKey) === "1";

    if (hasSeenLoader) {
      setShowLoader(false);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setShowLoader(false);
      window.sessionStorage.setItem(loaderSeenKey, "1");
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <InitialLoader />}
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
