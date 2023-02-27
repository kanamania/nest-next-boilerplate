"use client";
import dynamic from 'next/dynamic'
import './globals.css'

const Header = dynamic(() => import('@/app/header/header'), {ssr: false})
const Footer = dynamic(() => import('@/app/footer/footer'), {ssr: false})

import {useEffect, useState} from 'react';

export default function RootLayout({current, headerInfo, meta, children}: {
    children: React.ReactNode, current: string, headerInfo: { heading: any, text: any, buttonText: any, buttonLink: any }, meta: { title: string, description: string }
}) {
    const [socialMediaLinks, setSocialMediaLinks] = useState([]);
    const [initial, setInitial] = useState(true);
    useEffect(() => {
        if (!initial) return
        localStorage.setItem('social_links', JSON.stringify([
            {
                title: 'twitter',
                icon: '/twitter.svg',
                link: '#',
            },
            {
                title: 'facebook',
                icon: '/facebook.svg',
                link: '#',
            },
            {
                title: 'instagram',
                icon: '/instagram.svg',
                link: '#',
            },
        ]));
    }, [initial]);
    useEffect(() => {
        const _links = localStorage.getItem('social_links')

        const links =
            _links !== null
                ? JSON.parse(_links)
                : []

        setSocialMediaLinks(links);
        setInitial(false);
    }, []);
    return (
        <html lang="en">
        <head>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content={meta ? meta.description : ""}/>
            <link rel="icon" href="/favicon.ico"/>
            <title>{meta ? meta.title : ""} | Alpha Project</title>
        </head>
        <body>
        <Header current={current} headerInfo={headerInfo}/>
        {children}
        <Footer social_links={socialMediaLinks}/>
        </body>
        </html>
    )
}
