import Image from 'next/image';
import styles from '../page.module.css'
import {useState} from 'react';

export default function InvestNowCategories(props: { list: any[]; }) {
    const [content, setContent] = useState(props.list[0])

    return (
        <>
            <div className={styles.investNowSidebar}>
                <ul>
                    {props.list.map((item, index) => (
                        // @ts-ignore
                        // eslint-disable-next-line react/jsx-key
                        <li className={`${index==0 ? styles.investNowSidebarSelected : null}`.trim()}>
                            <a onClick={() => setContent(props.list[index])}>
                                <Image className={styles.investNowSidebarIcon} alt={item.title} width={30} height={30} src={"/" + item.icon}/>
                                <span>{item.title}</span>
                            </a>
                            <Image className={styles.investNowSidebarCube} alt="." width={30} height={30} src="/cube.svg"/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.investNowContent}>
                <Image width={397} height={160} src={content.banner} alt={content.title} />
                <p>{content.content}</p>
                <button>{content.button_text}</button>
            </div>
        </>
    )
}