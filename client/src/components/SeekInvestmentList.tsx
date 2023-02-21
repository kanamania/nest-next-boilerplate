import styles from '../page.module.css';
import Image from 'next/image';
import InvestmentInfo from '@/components/InvestmentInfo';

export default function SeekInvestmentList(props: { list: any[]; }){
    return (
        <ul className={styles.seekInvestmentList}>
            {props.list.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <li>
                    <InvestmentInfo item={item} />
                </li>
                )
            )}
        </ul>
    )
}