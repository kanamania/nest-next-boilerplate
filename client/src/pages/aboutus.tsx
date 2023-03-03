import styles from '@/styles/aboutus.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const Aboutus = () => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else
    return (
      <main className={styles.aboutMain}>
        <div className={styles.aboutTopContainer}>
          <h3>Our Mission</h3>
          <p>
            Sed in tristique vulputate sit. Tempus massa felis nisl habitasse
            neque tellus semper. Tempus ultrices eget id mauris. Mauris nisi
            praesent at mauris rhoncus nec leo pulvinar suspendisse. Ut massa
            viverra erat sodales dolor. At mauris egestas porttitor placerat.{' '}
          </p>
        </div>
        <div className={styles.aboutMiddleContainer}>
          <Image
            alt="."
            width={1322}
            height={321}
            src="/Rectangle46.jpg"
            priority={true}
          />
        </div>
        <div className={styles.aboutBottomContainer}>
          <div className={styles.aboutBottomContainerFirst}>
            <h3>WHO WE ARE</h3>
            <div className={styles.aboutBottomContainerFirstInner}>
              Turpis purus pellentesque quis senectus aenean sed adipiscing. Sit
              porttitor pellentesque ac nunc at id faucibus eget. Morbi vitae
              tellus enim mauris viverra et. Adipiscing lobortis venenatis
              eleifend sed ornare id. Mattis a accumsan sed faucibus. Lectus
              integer ullamcorper varius et justo amet.
              <br />
              <br />
              Adipiscing hac diam magna aliquam nulla vel. Tellus neque eget et
              nisi nec elit sed. Vitae ipsum sed a lacus id id. Leo quis eu
              viverra mi ac amet donec. Turpis gravida suspendisse justo sed. Et
              elit cursus sollicitudin malesuada nulla fermentum at.
              <br />
              <br />
              Odio nisl volutpat porttitor libero ultricies vel habitant
              convallis sagittis. Amet viverra congue dictum enim laoreet.
              Commodo amet turpis malesuada magnis at rhoncus tristique sit.
            </div>
          </div>
          <div className={styles.aboutBottomContainerSecond}>
            <h3>WORK WITH US</h3>
            <div className={styles.aboutBottomContainerSecondInner}>
              <div>
                Faucibus integer gravida semper sagittis. Sed elit et aenean leo
                iaculis. Fermentum placerat sagittis viverra elit et mi.
                Dignissim quis cum tortor elit metus. Sed nascetur scelerisque
                aliquam non non dignissim penatibus risus. Tincidunt magnis
                mauris pellentesque egestas eget et eget risus scelerisque.{' '}
              </div>
              <a href="#">Email Us</a>
            </div>
          </div>
          <div className={styles.aboutBottomContainerThird}>
            <h3>CONTACTS</h3>
            <div className={styles.aboutBottomContainerThirdInner}>
              <div className={styles.aboutContactInfo}>
                <Image
                  src="/contactcard.svg"
                  width={25}
                  height={18.75}
                  alt="Contact"
                />
                <div className={styles.aboutContactInfoDetails}>
                  <span>Alpha (T) Company Ltd</span>
                  <span>info@alpha.co.tz</span>
                  <span>+255714 213123</span>
                </div>
              </div>
              <div className={styles.aboutLocationInfo}>
                <Image
                  src="/location.svg"
                  width={25}
                  height={18.75}
                  alt="Contact"
                />
                <div className={styles.aboutLocationInfoDetails}>
                  <span>House # 32</span>
                  <span>Mikocheni</span>
                  <span>Dar Es Salaam,</span>
                  <span>Tanzania.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};
Aboutus.meta = {
  title: 'About Us',
  description: 'About Us',
};
export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: 'About Us',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'About Us',
        description: 'About Us',
      },
      current: 'aboutus',
    },
  };
}
export default Aboutus;
