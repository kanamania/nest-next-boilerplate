import { useEffect, useState } from 'react';

export default function () {
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
        heading: '500 - Server Error',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: '500 - Server Error',
        description: '500 - Server Error',
      },
      current: '500',
    },
  };
}
