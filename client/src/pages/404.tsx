import { useEffect, useState } from 'react';

export default function () {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else return <h1>404</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: '404 Not Found',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: '404 Not Found',
        description: '404 Not Found',
      },
      current: '404',
    },
  };
}
