import '../styles/style.scss'
import Layout from '../components/layout';

import AOS from "aos";

import { useEffect } from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [router.events]); // triggered on route change

  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
