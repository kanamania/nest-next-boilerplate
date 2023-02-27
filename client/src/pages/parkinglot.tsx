import {useEffect, useState} from 'react';
import Mediacenter from '@/pages/mediacenter';

function Parkinglot() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        return (
            <h1>Parking Lot</h1>
    )
}

export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Parking Lot',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Parking Lot",
                description: "Parking Lot"
            },
            current: 'parkinglot'
        }
    }
}

export default Parkinglot;