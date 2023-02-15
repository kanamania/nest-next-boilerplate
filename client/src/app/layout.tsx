import './globals.css'
import Header from './header/header'
import Head from '@/app/head';
import Footer from '@/app/footer/footer';


export default function RootLayout({current, headerInfo, meta, children}: {
  children: React.ReactNode, current: string, headerInfo: {heading: any, text: any, buttonText: any, buttonLink: any}, meta: {title: string, description: string} }) {
    const socialMediaLinks = [
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
    ];
    return (
        <html lang="en">
          <Head title={meta ? meta.title : null} description={meta ? meta.description : null} />
          <body>
          <Header current={current} headerInfo={headerInfo}/>
          {children}
          <Footer social_links={socialMediaLinks}/>
          </body>
        </html>
      )
}
