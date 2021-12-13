import Header from '../partials/Header';
import Footer from '../partials/Footer';

import Head from 'next/head'

import 'animate.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="7419 Tech Support"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <title>7419 Tech Support</title>
      </Head>

      <Header />
        <div id="root" className="font-inter antialiased bg-white text-gray-900 tracking-tight">
          <div className="flex flex-col min-h-screen overflow-hidden">
              {children}
              <Footer />
          </div>
        </div>
    </>
  )
  }