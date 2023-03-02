import {useEffect, useState} from 'react';

function Investnow() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        return (
            <h1>Invest Now</h1>
    )
}

export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Invest Now',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Invest Now",
                description: "Invest Now"
            },
            current: 'investnow'
        }
    }
}
export default Investnow;