import styles from '@/styles/Home.module.css';
import dynamic from 'next/dynamic';
const InvestmentInfo = dynamic(() => import('@/components/InvestmentInfo'), {
  ssr: false,
});

export default function SeekInvestmentList(props: { list: any[] }) {
  return (
    <ul className={styles.seekInvestmentList}>
      {props.list.map((item: any, index: number) => (
        <li key={index}>
          <InvestmentInfo item={item} />
        </li>
      ))}
    </ul>
  );
}
