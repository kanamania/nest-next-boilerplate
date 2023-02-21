import styles from './seekinvestment.module.css'
import SeekInvestmentList from '@/app/homepage/SeekInvestmentList';
import Link from 'next/link';
import Image from 'next/image';

export default function Seekinvestment() {
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
    return (
        <>
            <main className={styles.main}>
                <div className={styles.investmentFilter}>
                    <form>
                        <div className={styles.investmentFilterField}>
                            <label>Sector</label>
                            <select name="sector" id="sector">
                                <option>---</option>
                            </select>
                        </div>
                        <div className={styles.investmentFilterField}>
                            <label>Region</label>
                            <select name="region" id="region">
                                <option>---</option>
                            </select>
                        </div>
                        <div className={styles.investmentFilterField}>
                            <label>Investment (USD)</label>
                            <div className={styles.investmentFilterFieldRange}>
                                <input type="number" name="range_from"/>
                                <span>to</span>
                                <input type="number" name="range_to"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={styles.seekInvestment}>
                    <div className={styles.seekInvestmentHeading}>
                        <h3 className={styles.seekInvestmentTitle}>SEEK INVESTMENT</h3>
                        <div className={styles.seekInvestmentToggle}>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register Now</Link>
                        </div>
                    </div>
                    <div className={styles.seekInvestmentContainer}>
                        <SeekInvestmentList list={seekInvestmentList}/>
                    </div>
                    <div className={styles.seekInvestmentBottom}>
                        <Link className={styles.seekInvestmentBottomLoginLink} href="/login" >
                            <span>Login to see more</span>
                            <Image width={20} height={14} src="/arrow-right.svg" alt="Login to see more" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}