import '../css/style.scss'
import Layout from '../utils/Layout';

import AOS from "aos";

import { useEffect } from "react";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    const handleRouteChange = () => {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      window.addEventListener('load', AOS.refresh);
      document.querySelector('html').style.scrollBehavior = ''
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, []); // triggered on route change

  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp;
