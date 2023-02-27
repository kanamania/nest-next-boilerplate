import styles from '@/app/page.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const InvestmentInfo = dynamic(() => import('@/components/InvestmentInfo'), { ssr: false })

export default function SeekInvestmentList(props: { list: any[]; }){
    return (
        <ul className={styles.seekInvestmentList}>
            {props.list.map((item: any, index: number) => (
                // eslint-disable-next-line react/jsx-key
                <li key={index}>
                    <InvestmentInfo item={item} />
                </li>
                )
            )}
        </ul>
    )
}