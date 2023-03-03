import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function InvestmentInfo(props: { item: any }) {
  return (
    <div className={styles.seekInvestmentListItem}>
      <Link href={`/investment/${props.item.id}`}>
        <Image
          className={styles.seekInvestmentListItemImage}
          width={65}
          height={65}
          src={props.item.image}
          alt={props.item.seeker}
        />
      </Link>
      <div className={styles.seekInvestmentListItemDetail}>
        <div className={styles.seekInvestmentListItemTop}>
          <div className={styles.seekInvestmentListItemLeft}>
            <Link href={`/investment/${props.item.id}`}>
              <span className={styles.seekInvestmentListItemName}>
                {props.item.seeker}
              </span>
              <span className={styles.seekInvestmentListItemTarget}>
                {props.item.target}
              </span>
            </Link>
          </div>
          {props.item.showReaction ? (
            <div className={styles.seekInvestmentListItemRight}>
              <Image
                alt="like"
                width={20}
                height={18}
                src="/love.svg"
                className={styles.seekInvestmentListItemLove}
              />
              <Image
                alt="share"
                width={20}
                height={18}
                src="/kite.svg"
                className={styles.seekInvestmentListItemShare}
              />
              <Image
                alt="dialog"
                width={20}
                height={18}
                src="/dialog.svg"
                className={styles.seekInvestmentListItemDialog}
              />
            </div>
          ) : null}
        </div>
        <div className={styles.seekInvestmentListItemBottom}>
          <span className={styles.seekInvestmentListItemTime}>
            {props.item.time}
          </span>
          <span className={styles.seekInvestmentListItemCategory}>
            {props.item.category}
          </span>
        </div>
      </div>
    </div>
  );
}
