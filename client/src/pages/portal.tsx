import styles from '@/styles/portal.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export const countries = [
  {
    id: 'tanzania',
    title: 'Tanzania',
    url: '/portal/tanzania',
    flag: '/tanzania.svg',
    description:
      'Laoreet sed tincidunt volutpat vulputate vivamus facilisis. Volutpat mauris hendrerit mauris fusce ornare. Sociis faucibus turpis eleifend pretium purus blandit.',
  },
  {
    id: 'uganda',
    title: 'Uganda',
    url: '/portal/uganda',
    flag: '/uganda.svg',
    description:
      'Nam pulvinar urna netus dignissim enim feugiat urna. Commodo consectetur tellus egestas ut tellus elementum semper volutpat felis. Faucibus nunc eget consequat amet phasellus commodo phasellus quis.',
  },
  {
    id: 'kenya',
    title: 'Kenya',
    url: '/portal/kenya',
    flag: '/kenya.svg',
    description:
      'Vel netus at cursus morbi tincidunt fames. Porta imperdiet erat sed tempor enim sollicitudin aenean. Cras sit bibendum sodales massa elit vel nisi elit arcu. Et senectus arcu velit pellentesque ut sed aliquet convallis.',
  },
  {
    id: 'drc',
    title: 'Democratic Republic of Congo',
    url: '/portal/drc',
    flag: '/drc.svg',
    description:
      'Diam ultrices quisque pellentesque egestas tincidunt. Eget egestas nunc sagittis ultrices at tortor id. Leo dui erat praesent arcu et dui tincidunt eget nisl. Tincidunt in lectus faucibus augue amet.',
  },
  {
    id: 'south-sudan',
    title: 'South Sudan',
    url: '/portal/south-sudan',
    flag: '/south-sudan.svg',
    description:
      'Lobortis eget turpis egestas sit at elementum. Fames tristique non lobortis feugiat sed nec feugiat. At gravida id velit ut elementum orci faucibus quis. Varius neque enim at volutpat et in.',
  },
  {
    id: 'burundi',
    title: 'Burundi',
    url: '/portal/burundi',
    flag: '/burundi.svg',
    description:
      'Tempus aliquam iaculis suscipit neque id adipiscing laoreet porta. Augue pharetra mattis metus at. Viverra bibendum dolor venenatis adipiscing elit quis lectus viverra odio. A ipsum risus at cursus pulvinar.',
  },
];
function Portal() {
  const [countriesList, setCountriesList] = useState(countries);
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else
    return (
      <main className={styles.portalMain}>
        <div className={styles.portalContainer}>
          <h1>Information Portal</h1>
          <ul className={styles.portalCountriesList}>
            {countriesList.map((item: any, index: number) => (
              <li key={index}>
                <Link href={item.url}>
                  <Image src={item.flag} alt="." width={80} height={58} />
                  <div className={styles.portalListItemDetail}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                  <Image
                    src="/caret-right.svg"
                    alt="."
                    width={20}
                    height={30}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.portalAd}>
            <Image
              className={styles.portalAdImage}
              src="/ad-image.svg"
              alt="."
              width={100}
              height={100}
            />
            <span>
              Placeholder of advert for investment consultancy - provided by the
              platform
            </span>
          </div>
          <div className={styles.marginBottom}></div>
        </div>
      </main>
    );
}
export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: 'Information Portal',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Information Portal',
        description: 'Information Portal',
      },
      current: 'portal',
    },
  };
}

export default Portal;
