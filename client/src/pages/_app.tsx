import '@/styles/globals.css';

import RootLayout from '@/components/layout';
import dynamic from 'next/dynamic';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
  console.log({ pageProps });
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
