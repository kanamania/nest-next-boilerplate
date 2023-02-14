import styles from '../page.module.css';
import Image from 'next/image';

export default function SeekInvestmentList(props: { list: any[]; }){
    return (
        <ul className={styles.seekInvestmentList}>
            {props.list.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <li>
                    <Image width={65} height={65} src={item.image}  alt={item.seeker}/>
                    <div className={styles.seekInvestmentListItemDetail}>
                        <div className={styles.seekInvestmentListItemTop}>
                            <div className={styles.seekInvestmentListItemLeft}>
                                <span className={styles.seekInvestmentListItemName}>{item.seeker}</span>
                                <span className={styles.seekInvestmentListItemTarget}>{item.target}</span>
                            </div>
                            <div className={styles.seekInvestmentListItemRight}>
                                <Image alt="like" width={20} height={18} src="/love.svg" className={styles.seekInvestmentListItemLove} />
                                <Image alt="share" width={20} height={18} src="/kite.svg" className={styles.seekInvestmentListItemShare} />
                                <Image alt="dialog" width={20} height={18} src="/dialog.svg" className={styles.seekInvestmentListItemDialog} />
                            </div>
                        </div>
                        <div className={styles.seekInvestmentListItemBottom}>
                            <span className={styles.seekInvestmentListItemTime}>{item.time}</span>
                            <span className={styles.seekInvestmentListItemCategory}>{item.category}</span>
                        </div>
                    </div>
                </li>
                )
            )}
        </ul>
    )
}