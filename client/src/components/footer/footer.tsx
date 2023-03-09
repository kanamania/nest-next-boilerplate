import styles from './footer.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Footer(props: {
  social_links: { link: string | undefined; icon: any; title: any }[];
}) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else
    return (
      <footer className={styles.footerContainer}>
        <div className={styles.footerInner}>
          <span className={styles.copyrightText}>
            <span>Copyright</span>{' '}
            <Image
              src="/copyright.svg"
              width={15}
              height={15}
              alt="Copyright"
            />{' '}
            <span>2022 Alpha Project</span>
          </span>
          <div className={styles.socialMediaContainer}>
            <ul>
              {props.social_links.map(
                (
                  item: { link: string | undefined; icon: any; title: any },
                  index: number,
                ) => (
                  <li key={index}>
                    <a target="_blank" href={item.link} rel="noreferrer">
                      <Image
                        src={item.icon}
                        width={30}
                        height={30}
                        alt={item.title}
                      />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </footer>
    );
}
