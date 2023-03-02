import styles from './header.module.css'
import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function Header(props: {current: string, headerInfo: {heading: any, text: any, buttonText: any, buttonLink: any}}) {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        return (
        <header className={!['login', 'register', 'forgot'].includes(props.current) ? styles.headerContainer : styles.headerContainerEmpty}>
            <div className={styles.menuBar}>
                <div className={styles.brand}>
                    <Link href="/">Alpha<b>Project</b></Link>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link className={`${props.current=='aboutus' ? styles.menuSelected : null}`.trim()} href="/aboutus">About<br/>Us</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='investnow' ? styles.menuSelected : null}`.trim()} href="/investnow">Invest<br/>Now</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='seekinvestment' ? styles.menuSelected : null}`.trim()} href="/seekinvestment">Seek<br/>Investment</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='portal' ? styles.menuSelected : null}`.trim()} href="/portal">Information<br/>Portal</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='diaspora' ? styles.menuSelected : null}`.trim()} href="/diaspora">Diaspora</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='parkinglot' ? styles.menuSelected : null}`.trim()} href="/parkinglot">Parking<br/>Lot</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='mediacenter' ? styles.menuSelected : null}`.trim()} href="/mediacenter">Media<br/>Center</Link>
                    </li>
                    <li>
                        <Link className={`${props.current=='mediacenter' ? styles.menuSelected : null}`.trim()} href="/login">
                            <Image src="/user.svg" alt='' width={32} height={32} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={!['login', 'register', 'forgot'].includes(props.current) ? styles.headerDescription : styles.headerDescriptionEmpty}>
                <Image alt="..." className={styles.headerDescriptionAngle} src="/angle.svg" width={82} height={113} />
                <h1 className={styles.headerDescriptionTitle}>{props.headerInfo ? props.headerInfo.heading: null}</h1>
                <p className={styles.headerDescriptionText}>{props.headerInfo ? props.headerInfo.text : null}</p>
                <a href={props.headerInfo ? props.headerInfo.buttonLink : null}  className={styles.headerDescriptionButton}>{props.headerInfo ? props.headerInfo.buttonText : null}</a>
            </div>
        </header>
    )
}
