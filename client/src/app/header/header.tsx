import styles from './header.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.menuBar}>
                <div className={styles.brand}>Alpha<b>Project</b></div>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/pages/aboutus">About<br/>Us</Link>
                    </li>
                    <li>
                        <Link href="/pages/investnow">Invest<br/>Now</Link>
                    </li>
                    <li>
                        <Link href="/pages/seekinvestment">Seek<br/>Investment</Link>
                    </li>
                    <li>
                        <Link href="/pages/portal">Information<br/>Portal</Link>
                    </li>
                    <li>
                        <Link href="/pages/diaspora">Diaspora</Link>
                    </li>
                    <li>
                        <Link href="/pages/parkinglot">Parking<br/>Lot</Link>
                    </li>
                    <li>
                        <Link href="/pages/mediacenter">Media<br/>Center</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.headerDescription}>
                <Image alt="..." className={styles.headerDescriptionAngle} src="/angle.svg" width={82} height={113} />
                <h1 className={styles.headerDescriptionTitle}>INVESTOR</h1>
                <p className={styles.headerDescriptionText}>
                    Find investment opportunies, and invest in potential businesses right from your fingertips.
                </p>
                <button className={styles.headerDescriptionButton}>Join the platform</button>
            </div>
        </header>
    )
}
