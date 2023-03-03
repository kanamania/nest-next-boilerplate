import '@/styles/globals.css';

import RootLayout from '@/components/layout';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthService } from '@/services/auth.service';

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // run auth check on route change
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url: any) {
    const publicPaths = [
      '/',
      '/login',
      '/register',
      '/forgot',
      '/reset',
      '/mediacenter',
      '/parkinglot',
      '/diaspora',
      '/portal',
      '/seekinvestment',
      '/investnow',
      '/aboutus',
    ];
    const path = url.split('?')[0];
    if (!AuthService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content={pageProps.meta ? pageProps.meta.description : ''}
        />
        <link rel="icon" href="/favicon.ico" />
        <title>
          {pageProps.meta ? pageProps.meta.title : ''} | Alpha Project
        </title>
      </Head>
      <RootLayout
        current={pageProps.current ? pageProps.current : ''}
        headerInfo={pageProps.headerInfo ? pageProps.headerInfo : ''}
      >
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: true,
});
