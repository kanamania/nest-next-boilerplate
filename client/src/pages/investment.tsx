import styles from './investment.module.css'
import InvestmentInfo from '@/components/InvestmentInfo';
import {useEffect, useState} from 'react';
import Image from 'next/image';

function Investment() {
    const [investmentDetail, setInvestmentDetail] = useState<object|null>({
        image: '/Rectangle37.png',
        seeker: 'Haitham Omar',
        category: 'Livestock',
        time: '6 hours ago',
        target: 'Tsh 10M /one time',
        showReaction: false,
    });

    useEffect(()=> {
        setInvestmentDetail({
            image: '/Rectangle37.png',
            seeker: 'Haitham Omar',
            category: 'Livestock',
            time: '6 hours ago',
            target: 'Tsh 10M /one time',
            showReaction: false,
        })
    });
    return (
        <>
            <main className={styles.main}>
                <div className={styles.seekInvestment}>
                    <div className={styles.seekInvestmentHeading}>
                        <h3 className={styles.seekInvestmentTitle}>SEEK INVESTMENT</h3>
                    </div>
                    <div className={styles.seekInvestmentContainer}>
                    <div className={styles.seekInvestmentInfo}>
                        <InvestmentInfo item={investmentDetail} />
                    </div>
                    <div className={styles.seekInvestmentBody}>
                        <div>
                            Orci tortor fermentum non tincidunt orci parturient bibendum leo. Nulla hendrerit ullamcorper elit congue curabitur. Pellentesque augue fermentum tortor cras gravida lorem ipsum tincidunt. Enim est facilisi amet lectus sodales. Ac adipiscing quam dui cras est eget platea placerat sodales. Tellus orci sed accumsan massa posuere pellentesque in pretium. Interdum dignissim orci placerat cursus.
                            <br/>
                            <br/>
                            Facilisis volutpat magna enim vulputate lectus adipiscing sed lectus. Sit morbi eu interdum facilisi ultrices posuere non at. Blandit sit sit augue feugiat sit faucibus turpis erat odio. Velit accumsan in quis viverra volutpat sed ligula. Purus tincidunt ac amet hac ultricies viverra nulla diam. Dolor ipsum malesuada pharetra eros.
                        </div>
                    </div>
                    <div className={styles.seekInvestmentGallery}>
                        <Image src="/Investment.png" alt="." width={483} height={0} />
                    </div>
                    <div className={styles.seekInvestmentReactions}>
                        <div className={styles.seekInvestmentReactionsLike}>
                            <span>Like</span>
                            <Image src="/love-w.svg" alt="." width={20} height={18} />
                        </div>
                        <div className={styles.seekInvestmentReactionsComment}>
                            <span>Comment</span>
                            <Image src="/dialog-w.svg" alt="." width={20} height={18} />
                        </div>
                        <div className={styles.seekInvestmentReactionsShare}>
                            <span>Share</span>
                            <Image src="/kite-w.svg" alt="." width={20} height={18} />
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Investment',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Investment",
                description: "Investment"
            },
            current: 'seekinvesment'
        }
    }
}
export default Investment;