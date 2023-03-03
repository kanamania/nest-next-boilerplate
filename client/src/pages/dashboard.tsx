import { useEffect, useState } from 'react';

function Dashboard() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else return <h1>Dashboard</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: 'Dashboard',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Dashboard',
        description: 'Dashboard',
      },
      current: 'dashboard',
    },
  };
}

export default Dashboard;
