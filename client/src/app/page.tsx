"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import SeekInvestmentList from './homepage/SeekInvestmentList';
import InvestNowCategories from './homepage/InvestNowCategories';
import Footer from './footer/footer';
import Layout from '@/app/layout';
import Aboutus from '@/pages/aboutus';


const inter = Inter({ subsets: ['latin'] })

function Home() {
    const seekInvestmentList = [
        {
            image: '/Rectangle36.png',
            seeker: 'John Ulugu',
            target: 'Tsh 5M /month',
            time: '2 hours ago',
            category: 'Livestock',
        },
        {
            image: '/Rectangle37.png',
            seeker: 'Haitham Omar',
            target: 'Tsh 10M /one time',
            time: '6 hours ago',
            category: 'Livestock',
        },
        {
            image: '/Rectangle38.png',
            seeker: 'Millard John',
            target: 'USD 8,500 /month',
            time: '2 days ago',
            category: 'Mining',
        },
        {
            image: '/Rectangle39.png',
            seeker: 'MG & Company',
            target: 'Tsh 8M /month',
            time: '2 days ago',
            category: 'Startup Business',
        },
        {
            image: '/Rectangle47.png',
            seeker: 'Anara Recruitment Platform',
            target: 'Tsh 2.4M /month',
            time: '3 days ago',
            category: 'Startup Business',
        },
    ];
    const investNowCategories = [
        {
            icon: 'realestate.svg',
            title: 'Real Estate Development',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'tourism.svg',
            title: 'Tourism',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'pharmaceutical.svg',
            title: 'Pharmaceutical',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'energy.svg',
            title: 'Energy',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'livestock.svg',
            title: 'Livestock',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'manufacturing.svg',
            title: 'Manufacturing',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'agriculture.svg',
            title: 'Agriculture',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
        {
            icon: 'mining.svg',
            title: 'Mining',
            banner: '/Rectangle10.jpg',
            content: 'Nibh lorem in volutpat ac cursus pharetra. Neque pretium dui non gravida turpis orci, consectetur fermentum. In urna, pulvinar est ultricies mi ultrices laoreet.\n' +
                '\n' +
                'Viverra viverra odio risus duis augue felis sit vitae dignissim. Fames scelerisque amet egestas augue diam integer libero. In aliquam dui metus tempus consectetur risus.',
            button_text: 'Learn More',
            button_link: '#',
        },
    ];
  return (
      <>
          <main className={styles.main}>
              <div className={styles.investNow}>
              <div className={styles.investNowHeading}>
                  <h3 className={styles.investNowTitle}>INVEST NOW</h3>
                  <div className={styles.investNowCountryToggle}>
                      <button><Image alt="" width={41.5} height={30} src="/TzFlag.svg"/><span>TANZANIA</span></button>
                      <button><span>ALL COUNTRIES</span></button>
                  </div>
              </div>
              <div className={styles.investNowContainer}>
                  <div className={styles.investNowFilter}>
                      <button className={styles.investNowFilterSelected}>
                          <Image width={30} height={30} alt="By Sector" src="/sectoricon.svg"></Image>
                          <span>By Sector</span>
                      </button>
                      <button>
                          <Image width={30} height={30} alt="By Sector" src="/regionicon.svg"></Image>
                          <span>By Region</span>
                      </button>
                  </div>
                  <div className={styles.investNowCategories}>
                      <InvestNowCategories list={investNowCategories}/>
                  </div>
              </div>
              </div>
              <div className={styles.seekInvestment}>
                  <h3 className={styles.seekInvestmentTitle}>SEEK INVESTMENT</h3>
                  <div className={styles.seekInvestmentContainer}>
                      <div className={styles.seekInvestmentContainerBanner}>
                          <span>Do you have a viable business? Register now to see investment from unlimited potential
                              investors</span>
                          <button>Register Now</button>
                      </div>
                      <SeekInvestmentList list={seekInvestmentList}/>
                  </div>
              </div>
          </main>
      </>
  )
}
Home.getLayout = (page: React.ReactNode) => (
    <Layout
        headerInfo={{
            heading: 'INVESTOR',
            text: "Find investment opportunities, and invest in potential businesses right from your fingertips.",
            buttonText: "Join the platform",
            buttonLink: "#"
        }}
        current="home"
        meta={{
            title: "Home",
            description: "Home"
        }}
    >{page}</Layout>
)
export default Home;
