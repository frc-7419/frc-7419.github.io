import Header from "../partials/Header";
import FooterTemp from "../partials/FooterTemp";

import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Official website for FRC 7419 Team" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <title>QLS Tech Support</title>
      </Head>

      <Header />
      <div
        id="root"
        className="font-inter antialiased bg-white text-gray-900 tracking-tight"
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
          <FooterTemp />
        </div>
      </div>
    </>
  );
}
