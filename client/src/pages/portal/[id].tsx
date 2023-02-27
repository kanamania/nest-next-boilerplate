import { useRouter } from 'next/router'
import styles from './[id].module.css';
import useSet from '@restart/hooks/useSet';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {countries} from '@/pages/portal';

const PortalCountryPage = () => {
    const router = useRouter()
    const { id } = router.query
    const [sidebarMenu, setSidebarMenu] = useState([
        {
            title: "Why Invest in Tanzania",
            id: "one",
        },
        {
            title: "Official Gateway to Tanzania for Foreign Investors & Businesses",
            id: "two",
        },
        {
            title: "Procedures for Registering a Business and Starting a Company",
            id: "three",
        },
        {
            title: "Starting a Local Company/Businesses",
            id: "four",
        },
        {
            title: "Incentives offered to investors",
            id: "five",
        },
        {
            title: "Frequently Asked Questions (FAQs)",
            id: "six",
        },
    ]);
    const [nicheList, setNicheList] = useState([
        {
            title: "Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra. ",
            body: "Elementum elit nunc tortor sed sagittis id rhoncus mi. Dui dui amet dui libero. In ac pretium tellus enim. Viverra non rutrum risus eget vivamus amet sit massa. Vulputate mauris purus ornare diam elementum congue consectetur in leo. Vel elementum a feugiat viverra vitae faucibus enim nunc. Fringilla tortor nunc odio fringilla semper bibendum volutpat massa sed. Convallis volutpat tellus nec integer. In magna ornare turpis non arcu. Nisl egestas lectus orci maecenas. Vitae enim eu in adipiscing sit tempor egestas." +
                "<br/>" +
                "<br/>" +
                "Massa praesent faucibus porttitor nec nibh odio. Non massa interdum orci ac quis. Et quis habitant est quam orci." +
                "<br/>" +
                "Malesuada nam amet tortor vitae amet orci pellentesque rhoncus. Tortor ut placerat commodo mauris. Auctor urna turpis congue dolor faucibus quis rhoncus. Tempus vitae massa faucibus sed habitasse nisi. Tincidunt interdum habitant aliquam ullamcorper ac est morbi aliquet proin. Blandit convallis tristique neque ullamcorper venenatis ac vestibulum ornare. Habitant augue commodo sit dui in id. Sed sagittis molestie amet ullamcorper ut velit in mattis tincidunt.",
        },
        {
            title: "Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra. ",
            body: "Elementum elit nunc tortor sed sagittis id rhoncus mi. Dui dui amet dui libero. In ac pretium tellus enim. Viverra non rutrum risus eget vivamus amet sit massa. Vulputate mauris purus ornare diam elementum congue consectetur in leo. Vel elementum a feugiat viverra vitae faucibus enim nunc. Fringilla tortor nunc odio fringilla semper bibendum volutpat massa sed. Convallis volutpat tellus nec integer. In magna ornare turpis non arcu. Nisl egestas lectus orci maecenas. Vitae enim eu in adipiscing sit tempor egestas." +
                "<br/>" +
                "<br/>" +
                "Massa praesent faucibus porttitor nec nibh odio. Non massa interdum orci ac quis. Et quis habitant est quam orci." +
                "<br/>" +
                "Malesuada nam amet tortor vitae amet orci pellentesque rhoncus. Tortor ut placerat commodo mauris. Auctor urna turpis congue dolor faucibus quis rhoncus. Tempus vitae massa faucibus sed habitasse nisi. Tincidunt interdum habitant aliquam ullamcorper ac est morbi aliquet proin. Blandit convallis tristique neque ullamcorper venenatis ac vestibulum ornare. Habitant augue commodo sit dui in id. Sed sagittis molestie amet ullamcorper ut velit in mattis tincidunt.",
        },
        {
            title: "Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra. ",
            body: "Elementum elit nunc tortor sed sagittis id rhoncus mi. Dui dui amet dui libero. In ac pretium tellus enim. Viverra non rutrum risus eget vivamus amet sit massa. Vulputate mauris purus ornare diam elementum congue consectetur in leo. Vel elementum a feugiat viverra vitae faucibus enim nunc. Fringilla tortor nunc odio fringilla semper bibendum volutpat massa sed. Convallis volutpat tellus nec integer. In magna ornare turpis non arcu. Nisl egestas lectus orci maecenas. Vitae enim eu in adipiscing sit tempor egestas." +
                "<br />" +
                "<br />" +
                "Massa praesent faucibus porttitor nec nibh odio." +
                "<br />" +
                "Non massa interdum orci ac quis. Et quis habitant est quam orci." +
                "<br />" +
                "Alesuada nam amet tortor vitae amet orci pellentesque rhoncus." +
                "<br />" +
                "Tortor ut placerat commodo mauris. Auctor urna turpis congue dolor faucibus quis rhoncus. Tempus vitae massa faucibus sed habitasse nisi. Tincidunt interdum habitant aliquam ullamcorper ac est morbi aliquet proin. Blandit convallis tristique neque ullamcorper venenatis ac vestibulum ornare. Habitant augue commodo sit dui in id. Sed sagittis molestie amet ullamcorper ut velit in mattis tincidunt.",
        },
    ]);
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        return (
            <main className={styles.portalMain}>
                <div className={styles.portalContainer}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/portal">Information Portal</Link>
                        <Link href="#">Tanzania</Link>
                    </div>
                    <div className={styles.portalHeading}>
                        <Image src="/tanzania.svg" alt="." width={50} height={36} />
                        <h1>Tanzania & Zanzibar</h1>
                    </div>
                    <hr className={styles.portalContainerTitleUnderline}/>
                    <div className={styles.portalContent}>
                        <div className={styles.portalSidebar}>
                            <ul>
                                {sidebarMenu.map((item: any, index: number) => (
                                        <li key={index}>
                                            <Link href="#">{item.title}</Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className={styles.portalBody}>
                            <h3 className={styles.portalSectionTitle}>Why Invest in Tanzania</h3>
                            <div className={styles.portalSubSection}>
                                <h4 className={styles.portalSubSectionHTitle}>About Tanzania</h4>
                                <p className={styles.portalSubSectionBody}>
                                    Auctor hac viverra ac eget egestas ac maecenas. Hendrerit egestas lacus non morbi in. A volutpat commodo duis consequat ultrices tellus in. Risus magna dolor mattis bibendum neque. Tempus orci neque sed sit ac lacus pellentesque magna augue. Cras ligula porttitor massa urna sed sed urna vitae. Turpis neque lacus nec dictum.
                                    <br/>
                                    <br/>
                                    Ultricies mattis tempor porttitor pellentesque sit in ultricies convallis. Dapibus sem sed id lobortis integer. Vitae porttitor eget massa tellus adipiscing integer habitant quam ut. In erat at quisque consectetur. Leo odio et nullam a integer posuere dictumst orci. Dui at in nisl porttitor et gravida viverra augue. Cras quis dolor placerat ipsum facilisi in vitae tristique. Vitae at facilisis mauris feugiat arcu massa.
                                    <br/>
                                    <br/>
                                    Quis fringilla sed nunc elementum parturient amet eu purus. Faucibus sit facilisi aliquam vel eget habitasse aliquet dui. Faucibus ac aliquam lorem tortor venenatis tortor vel ut egestas. Felis bibendum tortor et felis. Hac aliquam magna cras eu. Nisl lorem erat id sed. Augue dignissim vel sagittis tincidunt sed massa augue consectetur. Nulla natoque bibendum cras donec ultricies a libero ullamcorper purus. Tortor sodales a cursus diam. Quis cursus faucibus vulputate id vestibulum odio eleifend. Magnis rhoncus tempus arcu gravida fringilla elit amet velit. Viverra feugiat enim etiam posuere eu ornare mauris dui odio.
                                </p>
                            </div>
                            <div className={styles.portalSubSection}>
                                <h4 className={styles.portalSubSectionHTitle}>Economical Indicators</h4>
                                <p className={styles.portalSubSectionBody}>
                                    Gravida netus felis nisl habitasse enim enim. Ut viverra in non platea ut eleifend sed integer ac. Magna vel vulputate morbi vulputate diam in risus enim. Quis est quis blandit massa metus sed leo quis nulla. Non amet pulvinar lorem nisl eleifend pretium dui et vitae.
                                    <br/>
                                    <br/>
                                    Bibendum pulvinar tincidunt pulvinar viverra. Amet pretium ipsum tellus luctus feugiat lorem. Mattis aliquam consequat euismod eget elementum faucibus est euismod. Blandit amet dolor feugiat eget mauris vel et enim. Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra.
                                    <br/>
                                    <br/>
                                    Eu dui eget ornare tempus tellus sollicitudin. Nunc non aliquam sagittis faucibus urna nisi. Egestas quam egestas justo eros etiam rhoncus donec dolor. Amet diam cum justo pharetra varius integer. Cras facilisi ut tellus bibendum. Aliquam auctor magna nec vulputate. Sit bibendum elit id mollis integer pellentesque porta. Magnis et rhoncus sed tincidunt lacinia donec mi. Amet dis venenatis mi lacinia posuere eleifend risus eget. Platea sem at parturient eu enim. Quam viverra in in odio tortor praesent sodales. In lectus id faucibus in eu venenatis lectus eu pellentesque.
                                </p>
                            </div>
                            <div className={styles.portalSubSection}>
                                <h4 className={styles.portalSubSectionHTitle}>Success Stories</h4>
                                <p className={`${styles.portalSubSectionBody} ${styles.portalSubSectionGallery}`}>
                                    <div>
                                        <Image src="/portal01.png" alt="." width={282} height={240} />
                                        <h5>Story TItle</h5>
                                        <span>Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra.
                                            <br/>
                                            Mattis aliquam consequat euismod eget elementum faucibus est euismod. Blandit amet dolor feugiat eget mauris vel et enim. Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam acc</span>
                                    </div>
                                    <div>
                                        <Image src="/portal02.png" alt="." width={282} height={240} />
                                        <h5>Story TItle</h5>
                                        <span>Mattis aliquam consequat euismod eget elementum faucibus est euismod. Blandit amet dolor feugiat eget mauris vel et enim. Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam acc
                                            <br/>
                                            <br/>
                                            Leget mauris vel et enim. Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra.</span>
                                    </div>
                                    <div>
                                        <Image src="/portal03.png" alt="." width={282} height={240} />
                                        <h5>Story TItle</h5>
                                        <span>Egiat eget mauris vel et enim. Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam accumsan tincidunt sed a nunc pharetra. Mattis aliquam consequat euismod eget elementum faucibus est euismod. Blandit amet dolor feugiat eget mauris vel et enim.
                                            <br/>
                                            <br/>
                                            Ac malesuada mollis non arcu amet. Libero et hac etiam elit felis mattis iaculis. Pellentesque blandit fames in nunc egestas sapien. Metus ornare adipiscing diam acc</span>
                                    </div>
                                </p>
                            </div>
                            <div className={styles.portalSubSection}>
                                <h4 className={styles.portalSubSectionHTitle}>Niche Business and Investment Opportunities</h4>
                                <p className={styles.portalSubSectionBody}>
                                    <ul className={styles.fancyList}>
                                        {nicheList.map((item: any, index: number) => (
                                            <li key={index}>
                                                <div>
                                                    <span className={styles.outerBorder}>
                                                        <span className={styles.innerBorder}>{++index}</span>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>{item.title}</span>
                                                    <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export async function getStaticPaths() {
    const ids = countries.map((item) => item.id);
    const pathsWithParams = ids.map((id: any) => ({ params: { id: id } }));

    return {
        paths: pathsWithParams,
        fallback: "blocking",
    };
}
export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Tanzania & Zanzibar',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Tanzania & Zanzibar",
                description: "Tanzania & Zanzibar"
            },
            current: 'portal',
        }
    }
}

export default PortalCountryPage