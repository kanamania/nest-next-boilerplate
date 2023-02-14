import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';

import {useEffect} from 'react';
import RootLayout from "../app/layout";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return <RootLayout {...pageProps}><Component {...pageProps} /></RootLayout>;
}

export default MyApp;