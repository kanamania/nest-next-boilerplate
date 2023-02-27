import '../app/globals.css';

import RootLayout from "../app/layout";
import dynamic from "next/dynamic";
function MyApp({ Component, pageProps }) {
    return <RootLayout {...pageProps}><Component {...pageProps} /></RootLayout>;
}
export default dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
});

