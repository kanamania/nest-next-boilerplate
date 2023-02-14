import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'

import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;