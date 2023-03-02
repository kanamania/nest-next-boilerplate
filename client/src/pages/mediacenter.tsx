import {useEffect, useState} from 'react';

function Mediacenter() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        return (
            <h1>Media Center</h1>
    )
}
export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Media Center',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Media Center",
                description: "Media Center"
            },
            current: 'mediacenter'
        }
    }
}

export default Mediacenter;