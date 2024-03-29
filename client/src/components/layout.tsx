'use client';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/header/header'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/footer/footer'), {
  ssr: false,
});

import { useEffect, useState } from 'react';

export default function RootLayout({
  current,
  headerInfo,
  children,
}: {
  children: React.ReactNode;
  current: string;
  headerInfo: { heading: any; text: any; buttonText: any; buttonLink: any };
}) {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [initial, setInitial] = useState(true);
  useEffect(() => {
    if (!initial) return;
    if (typeof window !== 'undefined')
      localStorage.setItem(
        'social_links',
        JSON.stringify([
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
        ]),
      );
  }, [initial]);
  useEffect(() => {
    let _links: any = '';
    if (typeof window !== 'undefined') {
      _links = localStorage.getItem('social_links');
    } else {
      _links = '[]';
    }
    const links = _links !== null ? JSON.parse(_links) : [];
    setSocialMediaLinks(links);
    setInitial(false);
  }, []);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete)
    return (
      <html>
        <body>{}</body>
      </html>
    );
  else
    return (
      <html lang="en">
        <head />
        <body>
          <Header current={current} headerInfo={headerInfo} />
          {children}
          <Footer social_links={socialMediaLinks} />
        </body>
      </html>
    );
}
