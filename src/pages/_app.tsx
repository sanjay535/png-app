import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MobileHeader from "@/components/mobileHeader";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {pageProps.device === "desktop" ? <Header /> : <MobileHeader />}
      <div
        style={{
          backgroundColor: "rgb(101,45,144, 0.9)",
          minHeight: "100vh",
          paddingTop: "70px",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
