import '../app/globals.css';

import RootLayout from "../app/layout";
import dynamic from "next/dynamic";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
                <meta name="description" content={pageProps.meta.description ?? Component.meta.description}/>
                <link rel="icon" href="/favicon.ico"/>
                <title>{pageProps.meta.title ?? Component.meta.title} | Alpha Project</title>
            </Head>
            <RootLayout current={pageProps.current ?? Component.current} headerInfo={pageProps.headerInfo ?? Component.headerInfo}>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}

export default dynamic(() => Promise.resolve(MyApp), {
    ssr: true,
});

