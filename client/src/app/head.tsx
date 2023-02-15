import Head from 'next/head';

export default function head(props: { title: any, description: any }) {
    return (
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content={props.description}/>
            <link rel="icon" href="/favicon.ico"/>
            <title>{props.title} | Alpha Project</title>
        </Head>
    )
}
