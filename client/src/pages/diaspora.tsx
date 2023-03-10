import { useEffect, useState } from 'react';

export default function Diaspora() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else return <h1>Diaspora</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: 'Diaspora',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Diaspora',
        description: 'Diaspora',
      },
      current: 'diaspora',
    },
  };
}
